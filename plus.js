const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
const Discord = require('discord.js');
const db = require('quick.db');

const client = new Discord.Client();

client.on('ready', async () => {
  
client.appInfo = await client.fetchApplication();
  
setInterval( async () => {
client.appInfo = await client.fetchApplication();
}, 600);
  
client.user.setActivity(`a?yardım | a?sunucukur`, { type:"WATCHİNG" })
  
console.log("BOT Kullanıma Hazır")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(ayarlar.token)

// ------------------------------ // Otorol // ------------------------------ //

client.on('guildMemberAdd', async member => {
  
let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
let kanal2 = member.guild.channels.cache.get(kanal1)

let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
let rol2 = member.guild.roles.cache.get(rol1)

if (!kanal2) return;
if (!rol2) return;
  
const embed = new Discord.MessageEmbed()

.setTitle('Arsix - Otorol')

.setColor("GREEN")

.setDescription(`Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol2.name}\` Rolü Verildi.`)

kanal2.send(embed)
  
member.roles.add(rol2)
});

// ------------------------------ // Otorol // ------------------------------ //

// ------------------------------ // Sayaç // ------------------------------ //

client.on("guildMemberAdd", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)  
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)             
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
    client.channels.cache.get(kanal).send(`📤 **${member}** Aramıza Katıldı! **\`${sayı}\`** Kişiye Ulaşmak İçin **\`${sonuç}\`** Kişi Kaldı Şu An \`${member.guild.memberCount}\` Kişiyiz.`)
    return
    })
    client.on("guildMemberRemove", async member => {
    let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`)                                                   
    let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`)                     
    if(!sayı || !kanal) return
    let sonuç = sayı - member.guild.memberCount
      
    client.channels.cache.get(kanal).send(`📥 **${member}** Aramızdan Ayrıldı! **\`${sayı}\`** Kişiye Ulaşmak İçin **\`${sonuç}\`** Kişi Kaldı Şu An \`${member.guild.memberCount}\` Kişiyiz.`)
    return
    })

// ------------------------------ // Sayaç // ------------------------------ //
//-------------------------------// afk //---------------------------------//
const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("RED")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});
//---------------------------------// afk //-----------------------------------//
//--------------------------------//  //----------------------------------//

//------------------------------//  //---------------------------------//