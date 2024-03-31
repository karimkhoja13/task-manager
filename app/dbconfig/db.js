import mongoose from 'mongoose';

export async function connect() {
    try {
            await mongoose.connect(process.env.MONGO_URI)
            mongoose.connection.on('connected', (err) => {
            console.log('>>> DB is connected');
        });
    } catch (e) {
        console.log('Failed to connect to DB');
        console.log(e);
    }
}