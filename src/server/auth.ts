'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

import { UserSchema } from '@/schemas/user';
import { getUser } from '@/server/user';
import { IUser } from '@/types/user';

const SECRET = process.env.AUTH_SECRET || '';

export const loginUser = async (
    data: z.infer<typeof UserSchema>
): Promise<IUser> => {
    try {
        const info = UserSchema.parse(data);

        const user = await getUser(info.email);

        if (!user) throw 'user not found';

        const validPassword = await bcrypt.compare(
            info.password,
            user.password
        );

        if (!validPassword) throw 'Invalid password';

        const token = jwt.sign({ _id: user._id }, SECRET, {
            expiresIn: '7d'
        });

        const cookieStore = await cookies();
        cookieStore.set({ name: 'token', value: token });

        return {
            _id: user._id,
            name: user.name,
            photo: user.photo,
            token
        };
    } catch (error) {
        throw error;
    }
};

export const getTokenInfo = async () => {
    try {
        const cookieStore = await cookies();

        const cookie = cookieStore.get('token');

        if (!cookie) return null;

        const userData = jwt.verify(cookie.value, SECRET);

        if (!userData || typeof userData === 'string' || !userData?._id)
            return null;

        return userData;
    } catch (error) {
        throw error;
    }
};

export const deleteToken = async () => {
    try {
        (await cookies()).delete('token');
    } catch (error) {
        throw error;
    }
};

export const checkAuth = async (): Promise<IUser | null> => {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get('token');

        if (!token) return null;

        const userData = jwt.verify(token.value, SECRET);

        if (!userData || typeof userData === 'string' || !userData?._id)
            throw 'Unauthorized';

        const user = await getUser(userData?._id);

        if (!user) throw 'User not found';

        return {
            _id: user._id,
            name: user.name,
            photo: user.photo,
            token: token.value
        };
    } catch (error) {
        throw error;
    }
};
