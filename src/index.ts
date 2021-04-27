import { Client } from 'discord.js';
import Dotenv = require('dotenv');
Dotenv.config()

const client = new Client();

client.on('ready', () => {
  console.log(`${client.user?.tag}에 로그인하였습니다!`);
});
client.on('message', message => {
  if (message.content.startsWith("벚꽃아 ")){
    const msg : String = message.content.replace("벚꽃아 ", "")
    
    if (msg.includes('핑')) {
      message.reply('퐁!');
    }
    else if(msg.includes('루인스')){
        
    }
    else if(msg.includes('Ruins')){

    }
    
  }
});
client.login(process.env.BOT_TOKEN);

export default client;