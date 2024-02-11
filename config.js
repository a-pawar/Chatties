import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect(process.env.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db is connected");
}
