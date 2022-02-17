//satın-al kodu
const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async(client , message , args) => {

  let cüzdanım = db.fetch(`cüzdan.${message.author.id}`)
  let balık2 = 100
  let satınalcağınşey = args[0]
  if(!satınalcağınşey) return message.channel.send("Bir Obje Belirt")
  if(cüzdanım < balık2) return message.channel.send("Paran Yetersiz")
  
  if(args[0] === "balık") {
    db.add(`cüzdan.${message.author.id}`, -balık2)
  const embed2 = new Discord.MessageEmbed()  
  .setDescription(`Sanırım Balık Satın Aldın Değeri ${balık2}`)
  message.channel.send(embed2)
  }

}

exports.conf = {
  aliases: []
};
exports.help = {
  name: "satın-al"
}