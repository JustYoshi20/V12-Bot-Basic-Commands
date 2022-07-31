const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle(`${client.user.username} - Komutlar`)

.setColor('GREEN')

.setDescription(`**${ayarlar.prefix}kayıt-kanal #kanal** Kayıt Knalını Ayarlarsınız.\n **${ayarlar.prefix}kayıtçı-rol @rol** Kayıt Görevlisi Rolünü Ayarlırsınız.\n **${ayarlar.prefix}alınacak-rol @rol**  Kayıt OLunca Alınacak Rolü Ayarlarsınız.\n **${ayarlar.prefix}erkek-rol @rol**  Erkek Rolünü Ayarlarsınız.\n **${ayarlar.prefix}kız-rol @rol**  Kız Rolünü Ayarlarsınız.\n **${ayarlar.prefix}erkek @kullanıcı isim yaş** Erkek Kaydını Yaparsınız.\n **${ayarlar.prefix}kız @kullanıcı isim yaş** Kız Kaydını Yaparsınız.\n`) 

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
  name: 'kayıt-sistemi',
  description: '',
  usage: ''
};