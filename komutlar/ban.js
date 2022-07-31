const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
  
if (!message.guild) {
  
let guild = message.guild
let reason = args.slice(1).join(' ');
let sa = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`Lütfen Sunucudan Yasaklayacağınız Kişiyi Etiketleyin.`).catch(console.error);

if (!message.guild.member(sa).bannable) return message.channel.send(`Belirttiğiniz Kişinin Yetkisi Benden Daha Üstün!`);

message.guild.member(sa).ban();

message.channel.send(" Başarılı, " + sa + " İd'li Kullanıcı **" + reason + "** Sebebiyle Sunucudan Yasaklandı.")   
}};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: '...',
  usage: 'Ban',
 
};