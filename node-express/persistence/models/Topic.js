const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TopicSchema = new Schema({
    topic_name: {
        type: String,
        required: true
    }
});

const Topic = model('Topic', TopicSchema);
module.exports = {'Topic': Topic};