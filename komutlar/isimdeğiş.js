const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {

if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanmak İçin **Yetkili** Olmalısın!`); 

let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
  
if(!kullanici) return message.reply(`Lütfen Bir Kullanıcı Giriniz! \nDoğru Kullanım ; \`${prefix}isim-değiş @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  
if(!isim) return message.reply(`Lütfen Bir Kullanıcı Adı Giriniz! \nDoğru Kullanım ; \`${prefix}isim-değiş @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
if(isim.length > 30) return message.reply(`Lütfen \`30\` Karakteri Geçmeyecek Şekilde Bir İsim Giriniz!`)
  
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
message.channel.send(`Başarılı Bir Şekilde \`${kullanici.username}\` Adlı Kişinin Kullanıcı Adı \`${isim}\` Olarak Değiştirildi.`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim-değiş'],
    permLevel: 0
}

exports.help = {
    name: 'isimdeğiş',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
}