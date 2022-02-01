const Discord = require('discord.js');
const client = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS]});
const token = process.env['DISCORD_TOKEN'];
client.on('ready', async() => {
    console.log('ready...');
    for (const guild of client.guilds.cache.values()) {
        for (const member of guild.members.cache.values()) {
            try {
                await member.voice.disconnect();
            } catch (e) {
                console.error(e);
            }
        }
    }
    process.exit(0)
});
client.login(token);

