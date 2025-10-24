const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;
dotenv.config();

const connect =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend!');
});

app.listen(PORT, () => {
                                        connect();
    console.log(`Server is running on port ${PORT}`);
});