const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setFooter('Arsix - İstatistik', bot.user.avatarURL)
  .addField("**Botun Sahibi**", "<@756798671240298589> / <@746343245034029096> / <@732644923550990348>")
  .addField("**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Çalışma süresi**", seksizaman)
  .addField("**Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("**Node.JS sürüm**", `${process.version}`, true)
  .addField("**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("**Bit**", `\`${os.arch()}\``, true)
  .addField("**İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**Bot Davet**", " [Davet](https://discord.com/oauth2/authorize?client_id=762345738893262889&scope=bot&permissions=8)", )
  .addField("**Destek Sunucusu**", " [Destek](https://discord.gg/YqdbJDR)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "...",
  usage: "istatisitk"
};