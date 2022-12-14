const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, tools) => {
let user;

if (message.mentions.users.first()) {
  
user = message.mentions.users.first();
} 
  
else { user = message.author; }

const member = message.guild.member(user);

const embed = new Discord.MessageEmbed()
    
.setTitle(`${user.username}#${user.discriminator} Kullanıcı Bilgi'si`)

.setColor("GREEN")
    
.setThumbnail(user.avatarURL)
    
.addField("İsim :",`${user.username}#${user.discriminator}`, true)
.addField("İd :", `${user.id}`, true)
.addField("Discord Tag :", `#${user.discriminator}`, true)
.addField("Hesap Oluşturma Tarihi :", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, ')}`, true)
.addField("Sunucuya Katılma Tarihi :", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}`, true)
.addField("Durumu :", `${user.presence.status}`, true)
  
.addField("Oynadığı Oyun :", `${user.presence.game ? user.presence.game.name : 'Bilinmiyor'}`, true)
        
message.channel.send({embed});
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['profil-bilgi','profilbilgi','kullanıcı-bilgi','kullanıcıbilgi','k-bilgi','kbilgi'], 
  permLevel: 0 
};

exports.help = {
  name: 'profil', 
  description: 'Etiketlediğin / kendi profilin hakkında bilgi verir.',
  usage: 'profil' 
};