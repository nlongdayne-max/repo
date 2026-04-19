const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`Bot đã online: ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.name === 'welcome'
  );

  if (!channel) return;

  channel.send(`👋 Xin chào ${member}, chào mừng bạn đến server!`);
});

client.login(process.env.TOKEN);
