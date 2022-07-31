const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle(`${client.user.username} - Komutlar`)

.setColor('GREEN')

.setDescription(`**${ayarlar.prefix}ban <@Etiket>** Etiketlediğin Kişiyi Sunucudan Yasaklar.\n **${ayarlar.prefix}unban** İd Sini Girdiğiniz Kullanıcının Banını Kaldırır. \n **${ayarlar.prefix}kick <@Etiket> <Sebep>** Etiketlediğin Kişiyi Sunucudan Atar.\n **${ayarlar.prefix}yavaşmod** Kanala Yavaşmod Ayarlarsınız.\n **${ayarlar.prefix}sunucu-bilgi** Sunucu Hakkında Bilgi Verir.\n **${ayarlar.prefix}rol-bilgi** Etiketlediğiniz Rol Hakkında Bilgi Verir.\n **${ayarlar.prefix}kanal-bilgi** Bulunduğunuz Kanal Hakkında Bilgi Verir.\n **${ayarlar.prefix}temizle <Miktar>** Belirttiğiniz Miktarda Mesajı Temizler.\n **${ayarlar.prefix}profil** Etiketlediğiniz Kişinin Hesap Bilgilerini Verir.\n **${ayarlar.prefix}isim-değiş** Etiketlediğiniz Kullanıcın İsmini Değişirsiniz. \n **${ayarlar.prefix}otorol** Sunucuya Girenlere Otomatik Rol Verir.\n **${ayarlar.prefix}ban-say** Sunucudaki Banlıları Gösterir.\n **${ayarlar.prefix}sunucu-kur** Gelişmiş Sunucu Kurar.\n`) 

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
  name: 'moderasyon',
  description: '',
  usage: ''
};