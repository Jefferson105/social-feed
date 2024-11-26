import { likePost } from '@/server/post';
import { dispatch, globalState } from '@/context';

export const likePostAction = async (postId: string) => {
    try {
        const { user } = globalState;

        if (!user) return;

        const liked = await likePost({ postId, user: user._id.toString() });

        dispatch(({ posts }) => {
            return {
                posts: posts.map((p) =>
                    p._id === postId
                        ? {
                              ...p,
                              liked,
                              likes: liked ? p.likes + 1 : p.likes - 1
                          }
                        : p
                )
            };
        });
    } catch (err) {
        console.log('Like err', err);
    }
};
