import { Db, MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URL || '';

let cachedConn: MongoClient;

const connectDB = async (): Promise<Db | undefined> => {
    try {
        if (!cachedConn) {
            cachedConn = await MongoClient.connect(mongoUri);
        }

        const DB = cachedConn.db('social');

        return DB;
    } catch (err) {
        console.error('Error during connect database', err);
    }
};

export default connectDB;
