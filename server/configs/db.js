const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log("DB not connected");
        console.error(err);
        process.exit(1);
    })
}