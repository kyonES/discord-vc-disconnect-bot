const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';
client.on('ready', () => {
    console.log('ready...');
});
client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (Date.prototype.getHours() === 3 || Date.prototype.getHours() === 4 || Date.prototype.getHours() === 5 || Date.prototype.getHours() === 6) {
        message.member.voice.channel.leave()
    }
});
client.login(token);

