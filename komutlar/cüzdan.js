//cüzdan kodu
const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async(client , message , args) => {

  
  let member = message.mentions.members.first() || message.author
  let cüzdanım = db.fetch(`cüzdan.${message.author.id}`) || `Paran Yok Fakir`
  
      
      const embed = new Discord.MessageEmbed()
      .setDescription(`Para Miktarı **${cüzdanım}**TL`)
    message.channel.send(embed)
      

}

exports.conf = {
  aliases: []
};
exports.help = {
  name: "cüzdan"
}
