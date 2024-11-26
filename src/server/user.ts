'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

import { UserCreateSchema } from '@/schemas/user';
import { findOne, insertOne } from '@/server/db/repository';
import { IUser } from '@/types/user';

const SECRET = process.env.AUTH_SECRET || '';

export const getUser = async (_id: string) => {
    try {
        const user = await findOne({ collectionName: 'users', query: { _id } });

        return user;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (
    data: z.infer<typeof UserCreateSchema>
): Promise<IUser> => {
    try {
        const info = UserCreateSchema.parse(data);

        const password = await bcrypt.hash(info.password, 10);

        const newUser = {
            _id: info.email,
            name: info.name,
            photo: 'user.png'
        };

        await insertOne({
            collectionName: 'users',
            data: { ...newUser, password }
        });

        const token = jwt.sign({ _id: newUser._id }, SECRET, {
            expiresIn: '7d'
        });

        const cookieStore = await cookies();
        cookieStore.set({ name: 'token', value: token });

        return { ...newUser, token };
    } catch (error) {
        throw error;
    }
};

export const editUser = async () => {};
