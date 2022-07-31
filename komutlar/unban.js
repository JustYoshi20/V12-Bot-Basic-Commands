const Discord = module.require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
  const permError = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle('• Hata : 01 •')
        .setDescription('Arsix | Bu Komutu Kullanmak İçin **Üyeleri Yasakla** Yetkisine Sahip Olmalısın')
   
  const userError = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle('• Hata : 02 •')
        .setDescription('Arsix | Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz a?unban <İd>')
 
  const userError2 = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle('• Hata : 03 •')
        .setDescription("Arsix | İd'de Harf Kullanılanamaz.")
 
  const userError3 = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle('• Hata : 04 •')
        .setDescription('Arsix | Bu Kullanıcı Yasaklanmamış.')
   
  const levelError = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle('• Hata : 05 •')
        .setDescription('Arsix | Sizinle Aynı Veya Daha Yüksek Bir Role Sahip Bir Üyenin Yasağını Kaldırmazsınız.')
 
 
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "motion"}));
 
  let user = args[0];
    if  (!user) return message.channel.send
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "motion"}));
 
  if  (isNaN(args[0])) return message.channel.send
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "motion"}));
 
  if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "motion"}));
 
 
  const banList = await message.guild.fetchBans();
 
 
  if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete({timeout: 5000, reason: "motion"}));
 
  message.guild.members.unban(user);
message.channel.send(`{motion} Sebebiyle | {user} **Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.**`)
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'unban',
    description: 'İstediğiniz kişinin banını kaldırır.',
    usage: 'unban [kullanıcı] [sebep]'
  };
