const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('ŞÜKÜR ÇALIŞIYORUM').then(x => x.delete({timeout: 30000}))
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = { 
  name: "deneme", 
  description: "botun çalıştığını belli eder",
  usage: "deneme"
};
