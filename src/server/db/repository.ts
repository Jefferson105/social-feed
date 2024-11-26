import connectDB from '@/server/db';
import { IFindDB, IAggregateDB, IInsertDB, IUpdateDB } from '@/types/database';

export async function findOne({ collectionName, query }: IFindDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn.collection(collectionName).findOne(query);

        return result;
    } catch (error) {
        console.error('FindOne', error);
    }
}

export async function findDB({ collectionName, query }: IFindDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn
            .collection(collectionName)
            .find(query)
            .toArray();

        return result;
    } catch (error) {
        console.error('findDB', error);
        throw error;
    }
}

export async function aggregateDB({ collectionName, pipeline }: IAggregateDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn
            .collection(collectionName)
            .aggregate(pipeline)
            .toArray();

        return result;
    } catch (error) {
        throw error;
    }
}

export async function insertOne({ collectionName, data }: IInsertDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn.collection(collectionName).insertOne(data);

        return result;
    } catch (error) {
        console.error('inserOne', error);
        throw error;
    }
}

export async function updateOne({ collectionName, query, data }: IUpdateDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn
            .collection(collectionName)
            .updateOne(query, data);

        return result;
    } catch (error) {
        console.error('updateOne', error);
        throw error;
    }
}

export async function updateMany({ collectionName, query, data }: IUpdateDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn
            .collection(collectionName)
            .updateMany(query, data);

        return result;
    } catch (error) {
        console.error('updateMany', error);
        throw error;
    }
}

export async function deleteMany({ collectionName, query }: IFindDB) {
    try {
        const conn = await connectDB();

        if (!conn) throw 'Database not found';

        const result = await conn.collection(collectionName).deleteMany(query);

        return result;
    } catch (error) {
        console.error('deleteMany', error);
        throw error;
    }
}
