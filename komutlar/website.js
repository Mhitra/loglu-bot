const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(" Burdan Websitemize Ulaşabilirsiniz ")
  //.setDescription("[__**AyaToon**__](https://ayatoon.com)")
  .setThumbnail ("https://1.bp.blogspot.com/-ngUIkMzSrCc/Yex56FO8nFI/AAAAAAAAAdg/82-n0QCDt4QYgJ5fxITHC9FpHbkGKTaBgCNcBGAsYHQ/s946/Moon%2Blight%2Blogo%2Btemplate%2B%25283%2529.png")
  .setDescription("[__**Ayışığı Kütüphanesi**__](https://ayisigikutuphanesi.blogspot.com)")
  .setFooter('Websitemizi Ziyaret ettiğin için teşekkürler..')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site","website"],
  permLevel: 0
};

exports.help = {
  name: 'website',
  description: '',
  usage: ''
};