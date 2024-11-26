import { number, object } from 'zod';

export const QuerySchema = object({
    page: number().optional().default(0),
    size: number().optional().default(30)
});
