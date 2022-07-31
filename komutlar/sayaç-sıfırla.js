const Discord = require('discord.js'),
db = require('quick.db'),
ayarlar = require('../ayarlar.json'),
prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let sayı = await db.fetch(`SayaçSayı_${message.guild.id}`)  
let kanal = await db.fetch(`SayaçKanal_${message.guild.id}`)  
 
if(!sayı && !kanal) return message.reply(`Sayaç Sistemi Ayarlı Değil. Örnek Kullanım : \`${prefix}sayaç <#Kanal> <Rakam>\``)
db.delete(`SayaçSayı_${message.guild.id}`) 
db.delete(`SayaçKanal_${message.guild.id}`) 
message.reply(`Sayaç Başarıyla Sıfırlandı.`)
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-sıfırla',
  description: '...',
  usage: 'sayaç-sıfırla'
};