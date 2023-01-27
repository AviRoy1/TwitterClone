const express = require('express');
const { PORT } = require('./config/serverConfig');
const connect = require('./config/database');

const Tweet = require('./models/tweet');

const app = express();

const startServer = ()=>{
    app.listen(PORT, async ()=>{
        console.log(`Server is running on port ${PORT}`,);
        await connect();
        console.log('Mongo db connected');
        
        // const tweet = await Tweet.create({
        //     content: "Second tweet",
        // })
        // console.log(tweet);
    });
}


startServer();
