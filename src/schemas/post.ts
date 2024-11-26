import { number, object, string } from 'zod';

export const TitleSchema = string().max(100);
export const DescSchema = string().max(500);

export const PostSchema = object({
    user_id: string(),
    title: TitleSchema,
    description: DescSchema,
    likes: string().array().optional().default([]),
    views: number().optional().default(0),
    comments: number().optional().default(0),
    image: string().optional()
});
