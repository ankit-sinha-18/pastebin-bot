const config = {};
module.exports = config;

config.messages = {
    START_MESSAGE : "This is simple [Pastebin Bot](pastebin.com) made by @dcdunkan from [Bots.DC](https://t.me/dcbots).\nWith this Bot, you can create pastes on pastebin super simply. Send /create to start creating the paste. \nHit /help for more details",
    START_MESSAGE_KEYBOARD : {
        inline_keyboard: [
            [{ text : 'Create a Paste', callback_data : 'create'}],
            [{ text : "Help", callback_data : "help" }, { text: "About", callback_data:'about' }]
        ]
    },
    PASTE_CREATION_CANCELLED_MESSAGE : "Paste Creation Cancelled. Enter /create to create a new paste. Or send /help to see the help message."

}

