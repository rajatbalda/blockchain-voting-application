const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/GradBVA';

if (!MONGO_URI) {
    throw new Error('❌ MONGO_URI environment variable is not defined.');
}

let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => {
            console.log('✅ MongoDB Connected');
            return mongoose;
        }).catch(err => {
            console.error('❌ MongoDB connection error:', err);
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

module.exports = dbConnect;  // ✅ Fix: Use CommonJS export
