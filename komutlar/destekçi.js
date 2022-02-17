const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
      return message.channel.send('<@714157928239726662> Yardımların İçin Teşekkürler.')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yapımcı"],
    permLevel: 0
};
exports.help = {
    name: "destekçi",
    description: "Belirtilen Etikette Kaç Kişi Olduğunu Gösterir",
    usage: "destekçi"
};