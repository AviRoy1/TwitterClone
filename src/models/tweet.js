const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        require: true,
    },

    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]

}, {timestamps: true});


const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;