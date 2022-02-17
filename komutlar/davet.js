const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("❤️ Beni Sunucuna Eklersen çok sevinirim ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=900295301322113055&scope=bot&permissions=1032) \n \n [__**Destek için**__](<@714157928239726662>)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet',
  usage: 'davet'
};