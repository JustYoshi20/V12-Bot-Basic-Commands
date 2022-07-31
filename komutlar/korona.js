const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const axios = require('axios');
exports.run = async (client, message, args) => {

if (!args.length) {
            axios.get('https://corona.lmao.ninja/v2/all')
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('Dünya Geneli COVID-19 Bilgileri')
                        .setDescription('Tanı Konulan Vakalar, Ölümler Ve Dünya Çapında Gelişmeler Ve Ülkeler Hakkında Bilgi Almak İçin ' + ` \`${ayarlar.prefix}korona <Ülke>\` `)
                        .addField(`Tanı Konulan Hasta Sayısı`,response.data.cases)
            .addField(`Toplam Ölüm`,response.data.deaths)
            .addField(`Toplam İyileşen`,response.data.recovered)
                        .setTimestamp();

                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle(`${args[0]} - COVID-19 Bilgileri`)
                        .addField(`Ülke`,response.data.country)
            .addField(`Tanı Konulan Hasta`,response.data.cases ,true)
            .addField(`Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`Toplam Ölüm`,response.data.deaths ,true)
            .addField(`Bugünkü Ölüm`,response.data.todayDeaths ,true)
            .addField(`Toplam İyileşen Hasta`,response.data.recovered ,true)
            .addField(`Aktif Vaka`,response.data.active ,true)
            .addField(`Toplam Kritik Vaka`,response.data.critical ,true)
            .addField(`Toplam Test`,response.data.tests ,true)
            .setThumbnail(response.data.countryInfo.flag)
          console.log(response)
                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
          message.channel.send('Lütfen Ülke Girerken Global Olarak Giriniz. Örnek : tr Veya turkey Şeklinde Girebilirsiniz.')
                    console.log(error);
                });
        }
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',
  usage: 'korona <ülke>'
};