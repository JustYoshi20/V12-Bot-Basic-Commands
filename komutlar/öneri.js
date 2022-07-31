const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('Example : !suggestion <write something>')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('Your suggestion has been submitted successfully.\nWe will reply on <#762584764548513812> channel soon!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** request's;`)

.addField(`:envelope: **Gönderen User's Information;**`, `:white_small_square: User Id: ${message.author.id}\n:white_small_square: User Name: ${message.author.username}\n:white_small_square: User Tag: ${message.author.discriminator}`)
.addField(":pencil: **Request/Recommendation Message**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('YOUR SUGGESTION CHANNEL ID').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["suggest"],
    permLevel: 0
}

exports.help = {
    name: 'suggestion',
    description: '',
    usage: 'suggestion <write something>'
}