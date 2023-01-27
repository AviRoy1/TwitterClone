const mongoose = require('mongoose');

const hashtagsSchema = new mongoose.Schema({
    
    title: {
        type: String,
        require: true,
    },

    tweet: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
        }
    ]

});

const Hashtag = mongoose.model('Hashtag',hashtagsSchema);

module.exports = Hashtag;