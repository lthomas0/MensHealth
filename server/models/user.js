
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0,
    },
});