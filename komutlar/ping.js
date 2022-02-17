const Discord = require('discord.js');

exports.run = async (client, message, args,) => {
  const sowwyz = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl = message.author.avatarURL();
  const bayrak = ":flag_tr:";
  const ping = `${Math.round(client.ws.ping)}ms`;

let embed = new Discord.MessageEmbed()
.setTitle(':timer: Anlık Gecikme Süresi :timer:')
.setColor("#cccc25")
.addField(":crystal_ball: Ping :", ping)
.addField(":beginner: Lokasyon :", bayrak)
.setFooter(sowwyz, userurl)
.setTimestamp();

message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ms"],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gecikme süresini gösterir.',
  usage: 'ping'
};