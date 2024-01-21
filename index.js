// Watch my Discord Bot Project Tutorial video here: https://youtu.be/pDQAn18-2go - Discord Bot Tutorial | JavaScript & Node.js


import axios from "axios"
import { Client, GatewayIntentBits } from 'discord.js';
import { data } from "./meme";

import * as dotenv from "dotenv"

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log('bot is ready');
})

client.on('messageCreate', async (message) => {
    if (message.content === 'rose') {
        message.reply({
            content: 'hack',
        })
    }
    else if (message.content === 'cole') {
        message.reply({
            content: 'miller',
        })
    }
    else if (message.content === 'quote') {
        let resp = await axios.get(`https://api.quotable.io/random`);
        const quote = resp.data.content;

        message.reply({
            content: quote,
        })
    }
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
        //console.log(interaction.commandName);
        if(interaction.commandName === 'hey') {
            interaction.reply('hey!');
        }
        
        else if(interaction.commandName === 'ping') {
            interaction.reply('pong');
        }

});

client.login(process.env.DISCORD_BOT_ID);