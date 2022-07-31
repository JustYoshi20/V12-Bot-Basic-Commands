const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
let sayfalar = [
    
`**Prefix: !**\nBir problemin var mı?,\n[Sunucumuz](https://discord.gg/ynjFXvf)\n[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=744479821265895474&scope=bot&permissions=2147483647)\nAnlık Komut Sayımız: ${client.commands.size}`,
    
"**Kullanıcı Komutları**\n``!yetkilerim``\n``!kanalbilgi``\n``!hata (hataları bildirir)``\n``!afk``",
"**Yetkili Komutlar**\n``!sil``\n``!ban``\n``!idban``\n``!yavaş-mod``\n``!çekiliş``\n``!snipe``\n``!banlist``\n``!mute``\n``!kanal aç/kapat``" +
      
client.commands
.filter(cmd => exports.help.category === "admin")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),

"**Bot Komutları**\n``!ping``\n``!yapımcım``\n``!davet``\n``!botbilgi``\n``!bizkimiz``\n``!canlıdestek``\n``!site``" +

client.commands
.filter(cmd => exports.help.category === "util")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Koruma Komutları**\n``!reklam-engel``\n``!rol-koruma``\n``!kanal-koruma``\n``!küfür-engel``" +

client.commands
.filter(cmd => exports.help.category === "photo")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Eğlence Komutları**\n``!postat``\n``!zarat``\n``!kralol``\n``!zıt-renk``\n``!emojiyazı <yazı>``\n``!banner <yazı>``\n``!spoiler <yazı>``\n``!sunucu-pp``\n``!pp``" +

client.commands
.filter(cmd => exports.help.category === "fun")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
    
"**Moderasyon Komutları**\n``!otorol``\n``!sayaç``\n``!sayaç-kapat``\n``!ototag``\n``!sa-as aç/kapat``\n``!giriş-kanal``\n``!çıkış-kanal``\n``!tanıt``\n``!sunucu-kurulum``",
    
"**NSFW :x:**\n``!nsfw``\n``!4k``" +
  
client.commands
.filter(cmd => exports.help.category === "nsfw")
.map(cmd => " " + exports.help.name + " ")
.join("\n"),
   
];
  
let sayfa = 1;

const embed = new Discord.MessageEmbed()
    
.setColor("RANDOM")
.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
.setDescription(sayfalar[sayfa - 1]);

message.channel.send(embed).then(msg => {
msg.react("⏪").then(r => {
msg.react("⏩");

const backwardsFilter = (reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id;

const backwards = msg.createReactionCollector(backwardsFilter);
const forwards = msg.createReactionCollector(forwardsFilter);

backwards.on("collect", r => {
  
if (sayfa === 1) return;

sayfa--;

embed.setDescription(sayfalar[sayfa - 1]);
embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
msg.edit(embed);
});

forwards.on("collect", r => {

if (sayfa === sayfalar.length) return;

sayfa++;

embed.setDescription(sayfalar[sayfa - 1]);
embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
msg.edit(embed);

});
});
});
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gelişmekteyardım", "demoyardım", "h", "dy"],
  permLevel: 0
};

module.exports.help = {
  name: "yardıms",
  description: "Gelişmiş Sayfalı Yardım.",
  usage: "yardım"
};