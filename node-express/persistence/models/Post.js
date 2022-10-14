const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    topic_name: {
        type: String,
        required: true
    },
    username:  {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: Number,

    datePublished: {
        type: String,
        required: true
    },

    isApproved: {
        type: Boolean,
        required: true
    }

});

const Post = model('Post', PostSchema);
module.exports = {'Post': Post};