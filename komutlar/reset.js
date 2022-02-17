const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
 if(message.author.id !== "714157928239726662")  return message.channel.send("Sahibim değisilsin hadi işine paşam")
  
  let x = client.ws.ping + 20
  
let dcs = new Discord.MessageEmbed()
  .setTitle('Reboot')
  .setDescription("Şu an **Bot İsmi** bot'u yeniden başlatmak üzeresin.")
  .addField('', '')
  .addField('Şu anki Ping Değeri:', '**'+client.ws.ping+'** ms!')
  .addField('Reboot Sonrası Ping Değeri:', '**'+x+'** ms!')
  .addField('', '')
  .addField('__SEÇENEKLER__', '**iptal** `/` **devam**')
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setColor('RED')
message.channel.send(dcs).then(m => {
  
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
 collected.first().delete()
 m.delete()
 message.reply('İşlemi iptal ettim aşkım')    
     
   }
   if(collected.first().content === "devam") {
 collected.first().delete()
let discordcodeshare = new Discord.MessageEmbed()
  .setTitle('⩥ Reboot')
  .setDescription("Reboot işlemi başarılı. ")
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setColor('GREEN')
 m.edit(discordcodeshare)
 
  setTimeout(() => {
   
    console.log(`BOT: Bot yeniden başlatılıyor... `);
    process.exit(0);
 }, 2000)      
     
   }    

    
    
  })
   
  
  
  
})
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['reboot'], 
  permLevel: 0
};

exports.help = {
  name: 'refresh',
  description: 'taslak', 
  usage: 'refresh'
};