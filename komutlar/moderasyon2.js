const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle(`${client.user.username} - Komutlar`)

.setColor('GREEN')

.setDescription(`**${ayarlar.prefix}ototag aç <Tag>** Ototag Ayarlarsınız.\n **${ayarlar.prefix}ototag kapat** Ototagı Sıfırlarsınız.\n **${ayarlar.prefix}afk** Afk OLursunuz.\n **${ayarlar.prefix}ototag kapat** Ototagı Sıfırlarsınız.\n`)  

.addField(`» Linkler`, `[Bot Davet Linki](https://is.gd/uJrIQn) **|** [Destek Sunucusu](https://discord.gg/QfDqqDG)`)

.setThumbnail(client.user.avatarURL)

.setImage("https://cdn.discordapp.com/attachments/762351575750148117/762354520608473128/Ejderha.jpg")  

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: '',
  usage: ''
};