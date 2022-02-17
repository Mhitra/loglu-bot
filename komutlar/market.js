//market kodu
const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async(client , message , args) => {

    const embed = new Discord.MessageEmbed()
.setDescription(`Balık = **100TL**`)
    message.channel.send(embed)
}

exports.conf = {
  aliases: []
};
exports.help = {
  name: "market"
}