import { object, string } from 'zod';

export const EmailSchema = string().email();
export const PasswordSchema = string().min(6).max(50);
export const NameSchema = string().max(100).min(2);

export const UserSchema = object({
    email: EmailSchema,
    password: PasswordSchema
});

export const UserCreateSchema = UserSchema.extend({
    name: NameSchema,
    confirmPassword: PasswordSchema
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must be equal',
    path: ['confirmPassword']
});
