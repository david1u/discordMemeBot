// Watch my Discord Bot Project Tutorial video here: https://youtu.be/pDQAn18-2go - Discord Bot Tutorial | JavaScript & Node.js

require('dotenv').config();

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
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

client.login(process.env.DISCORD_BOT_ID);