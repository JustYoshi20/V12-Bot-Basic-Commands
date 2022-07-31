const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle(`${client.user.username} - Komutlar`)

.setColor('GREEN')

.setDescription(`**${ayarlar.prefix}hesap-aç isim** Hesap Açarsınız.\n **${ayarlar.prefix}hesap-sil** Hesabınızı Silersiniz.\n **${ayarlar.prefix}hesap-bilgi @kullanıcı** Hesap Bilgilerine Bakarsınız.\n **${ayarlar.prefix}market**  Markete Girersiniz.\n **${ayarlar.prefix}para-gönder @kullanıcı miktar**  Para Gönderirsiniz.\n **${ayarlar.prefix}para-bilgi** Paranıza Bakarsınız.\n`) 

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
  name: 'ekonomi',
  description: '',
  usage: ''
};