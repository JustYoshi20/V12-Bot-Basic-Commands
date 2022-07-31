const Discord = require('discord.js'),
db = require('quick.db'),
ayarlar = require('../ayarlar.json'),
prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
const sayı = args[1]
const kanal = message.mentions.channels.first()
if(!sayı || !kanal) return message.reply(`Sayaç Sistemini Ayarlamak İçin, Kanal Ve Sayı Değeri Girin. Örnek Kullanım : \`${prefix}sayaç <#Kanal> <SRakam>\``)
if(isNaN(sayı)) return message.reply(`Sayaç Sistemini Ayarlamak İçin Bir Rakam Gir.`)
  
await db.set(`SayaçSayı_${message.guild.id}`,sayı)  
await db.set(`SayaçKanal_${message.guild.id}`,kanal.id)                                         
  
message.reply(`Sayaç Başarıyla Ayarlandı! Kapatmak İçin ; **${prefix}sayaç-sıfırla**`)
};
exports.conf = {
  enabled: false,                                                                                                                                  
  guildOnly: false,
  aliases: ['sayaç'],
  permLevel: 3
};
exports.help = {                                                                                                                                           
  name: 'sayaç-ayarla',
  description: '...',
  usage: 'sayaç-ayarla'
};