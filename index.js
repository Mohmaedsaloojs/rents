import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const targetChannelId = '1269637473915633818';
const emoji = '1270013116595310655'; 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot || message.channel.id !== targetChannelId) {
        return;
    }

    message.react(emoji).catch(console.error);
});

client.login(process.env.token);
