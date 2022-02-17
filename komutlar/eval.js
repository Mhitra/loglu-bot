const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      if(message.author.id !== "714157928239726662") //if(message.author.id !== "714157928239726662") //ikinci kişi
{
  return message.channel.send(':no_entry_sign: Geliştiricim Değilsin!')
        };
    if (args[0] === "client.token")
    return message.channel.send('**Tokenimi Bana Özel!**');
//Mhitra
      try {
      var code = args.join(" ");//Mhitra
      var evaled = eval(code);//Mhitra

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send("** **", clean(evaled));
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval'],
  permLevel: 0
};
//Mhitra
exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [Kodunuz]'
};