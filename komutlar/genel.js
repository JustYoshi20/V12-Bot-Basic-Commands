const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle(`${client.user.username} - Komutlar`)

.setColor('GREEN')

.setDescription(`**${ayarlar.prefix}yapımcım** Botun Yapımcılarını Gösterir.\n **${ayarlar.prefix}davet** Botun Davet Linklerini Gösterir.\n **${ayarlar.prefix}avatar**  Avatarınızı Gösterir.\n **${ayarlar.prefix}komutsay**  Botta Kaç Komut Bulunduğunu Gösterir.\n **${ayarlar.prefix}ping**  Botun Pingini Gösterir.\n **${ayarlar.prefix}korona** Yazdığınız Ülkenin Korona İstatiğini Atar.\n **${ayarlar.prefix}hata <hata>** Botta Bulduğunuz Hatayı Bize Gönderirsiniz.\n **${ayarlar.prefix}öneri <öneriniz>** Bot Hakkındaki Önerinizi Bize Gönderirsiniz.\n`) 

.addField(`» Linkler`, `[Bot Davet Linki](https://is.gd/uJrIQn) **|** [Destek Sunucusu](https://discord.gg/QfDqqDG)`)

.setThumbnail(client.user.avatarURL)

.setImage("https://cdn.discordapp.com/attachments/762351575750148117/762354520608473128/Ejderha.jpg")  

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'genel',
  description: '',
  usage: ''
};