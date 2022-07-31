const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const yapımcım = new Discord.MessageEmbed()
  
  .setTitle('Yapımcılarım ;')
  
  .setColor("GREEN")
  
  .setThumbnail('https://cdn.discordapp.com/attachments/762351575750148117/762366491143700520/Ejderha.jpg')
  
  .setDescription('<@756798671240298589> / <@746343245034029096> / <@732644923550990348>')
  
  message.channel.send(yapımcım)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yapimcim'],
  permLevel: 0
}

exports.help = {
  name: "yapımcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yapımcım"
}