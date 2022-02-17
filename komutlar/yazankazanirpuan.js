const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${etiketlenenKişi} kullanıcısının **${await db.get(`yazankazanir.${etiketlenenKişi.id}`) || 0}** puanın var.
`)
.setFooter("Ayatoon.com")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(arwEmbed)

}
module.exports.conf = {
    aliases: ["yazankazanırpuan","ykp"],
    permLevel: 0,
    enabled: true,
    guildOnly: true
  };
   
  module.exports.help = {
    name: "yazan-kazanır-puan",
    description: "",
    usage: "yazankazanırpuan"
  };