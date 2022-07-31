const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
const geneldavet = new Discord.MessageEmbed()

.setTitle('Arsix - Davet')

.setColor("BLACK")

.addField("**Bot Davet**", `[Davet](https://discord.com/oauth2/authorize?client_id=762345738893262889&scope=bot&permissions=8)`, true)
.addField("**Destek Sunucu**", `[Destek](https://discord.gg/YqdbJDR)`, true)

.setFooter(`${message.author.tag}` , client.user.avatarURL)
  
message.channel.send(geneldavet)
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : [],
  permLevel: 0
}

exports.help = {
  name: "davet",
  description: "...",
  usage: "davet"
}