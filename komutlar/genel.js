const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let botadı = ayarlar.botadı



exports.run = function(client, message) {
  
  let prefix = ayarlar.prefix
  
const jsistem = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle("Genel Komutları")
.addField(`${prefix}Capslock engel`,'capslock engel açar.')
.addField(`${prefix}kanal koruma`,'Kanal korumayı açar ')
.addField(`${prefix}küfür engel`,'küfür engel açar')
.addField(`${prefix}Rol koruma`,'Rol korumayı açar')
.addField(`${prefix}everhere`,'Everyone & Here engel açar')
.addField(`${prefix}Reklam Engel`,'Reklam engel açar')
.addField(`${prefix}Nuke`,'Yazdığınız kanalı siler ve tekrar oluşturur')
.addField(`${prefix}Avatar`,'avatar gösterir')
.addField(`${prefix}Duyuru`,'Duyuru yapar')
.addField(`${prefix}Yazı-tura`,'Yazı tura atar')
.addField(`${prefix}yazan kazanır`,'Hızlı olan kazanır oyunu')
.addField(`${prefix}website`,'website linki atar')



.setFooter(`${botadı} Genel Komutlar`, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
message.channel.send(jsistem)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'genel',
};