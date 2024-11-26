'use server';

import { z } from 'zod';
import { ObjectId } from 'mongodb';

import { PostSchema } from '@/schemas/post';
import {
    aggregateDB,
    findOne,
    insertOne,
    updateOne
} from '@/server/db/repository';
import { ILikePost, IPost, IPostBase, IPostRaw } from '@/types/posts';
import { QuerySchema } from '@/schemas/api';
import { getTokenInfo } from '@/server/auth';

export const createPost = async (
    data: z.infer<typeof PostSchema>
): Promise<IPostBase> => {
    try {
        const info = PostSchema.parse(data);

        const now = new Date();

        const { insertedId } = await insertOne({
            collectionName: 'posts',
            data: {
                ...info,
                created_at: now,
                updated_at: now
            }
        });

        return { ...info, _id: insertedId.toString() };
    } catch (error) {
        throw error;
    }
};

export const listPosts = async (
    data?: z.infer<typeof QuerySchema>
): Promise<IPost[]> => {
    try {
        const { page, size } = QuerySchema.parse(data || {});

        const posts = (await aggregateDB({
            collectionName: 'posts',
            pipeline: [
                {
                    $lookup: {
                        from: 'users',
                        localField: 'user_id',
                        foreignField: '_id',
                        as: 'user'
                    }
                },
                {
                    $sort: {
                        created_at: -1
                    }
                },
                {
                    $skip: page * size
                },
                {
                    $limit: size
                }
            ]
        })) as IPostRaw[];

        const user = await getTokenInfo();

        return posts.map((p) => ({
            ...p,
            _id: p._id.toString(),
            likes: p.likes.length,
            liked: p.likes.some((l: string) => l === user?._id),
            user: {
                _id: p.user[0]._id,
                name: p.user[0].name,
                photo: p.user[0].photo
            }
        }));
    } catch (error) {
        throw error;
    }
};

// TODO: move to bucket pattern
export const likePost = async ({ postId, user }: ILikePost) => {
    try {
        const postObj = new ObjectId(postId);

        const post = await findOne({
            collectionName: 'posts',
            query: { _id: postObj }
        });

        if (!post) throw 'Post does not exist';

        if (post.user_id !== user) throw 'Unauthorized';

        const liked = post.likes.some((l: string) => l === user);

        const data = liked
            ? { $pull: { likes: user } }
            : { $push: { likes: user } };

        await updateOne({
            collectionName: 'posts',
            query: { _id: postObj },
            data
        });

        return !liked;
    } catch (error) {
        throw error;
    }
};
