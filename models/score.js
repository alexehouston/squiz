const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    score: {type: Number},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    }, {
        timestamps: true,
})