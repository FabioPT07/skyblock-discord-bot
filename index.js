// Bot Discord para Skyblock
const { Client, GatewayIntentBits } = require('discord.js');

// Criar cliente Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Evento: Bot está pronto
client.once('ready', () => {
  console.log(`Bot iniciado como ${client.user.tag}`);
});

// Evento: Mensagem recebida
client.on('messageCreate', async (message) => {
  // Ignorar mensagens de bots
  if (message.author.bot) return;

  // Comando de teste
  if (message.content === '!ping') {
    message.reply('Pong!');
  }

  // Adicione mais comandos aqui
});

// Login com o token do bot
// IMPORTANTE: Adicione o seu token no ficheiro .env ou como variável de ambiente
client.login(process.env.DISCORD_TOKEN);
