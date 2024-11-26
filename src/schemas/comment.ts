import { object, string } from 'zod';

export const CommentSchema = object({
    user_id: string(),
    post_id: string(),
    description: string()
});
