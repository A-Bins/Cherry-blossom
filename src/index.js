"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Dotenv = require("dotenv");
Dotenv.config();
const client = new discord_js_1.Client();
client.on('ready', () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}에 로그인하였습니다!`);
});
client.on('message', message => {
    if (message.content.startsWith("벚꽃아 ")) {
        const msg = message.content.replace("벚꽃아 ", "");
        if (msg.includes('핑')) {
            message.reply('퐁!');
        }
        else if (msg.includes('루인스')) {
        }
        else if (msg.includes('Ruins')) {
        }
    }
});
client.login(process.env.BOT_TOKEN);
exports.default = client;
