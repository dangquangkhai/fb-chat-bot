﻿var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "davidarchuleta789@gmail.com", password: "Iloveopsr1998"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("BOT - Hiện tại mình đang đi ra ngoài, mình sẽ trả lời bạn ngay khi tới nhà,", message.threadID);
        }
    });
});