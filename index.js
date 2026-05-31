require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Creamos la instancia del bot con sus permisos básicos
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// Cuando el bot se conecte con éxito a Discord
client.once('ready', () => {
    console.log(`🤖 ¡Bot de Mint Hosting activo! Conectado como: ${client.user.tag}`);
});

// Un comando básico de prueba por mensaje
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignorar otros bots

    if (message.content.toLowerCase() === '!ping') {
        message.reply('🏓 ¡Pong! El servidor respondio al comando.');
    }
});

// Token
client.login(process.env.DISCORD_TOKEN);
