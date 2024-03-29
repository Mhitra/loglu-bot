
const { MessageEmbed } = require("discord.js");
const data = require("quick.db");
const jdb = new data.table("cezalar");
const kdb = new data.table("kullanici");
const ms = require('ms');
const ayarlar = require("../ayarlar.json");
const moment = require('moment');
module.exports.run = async (client, message, args) => {

const permError = new MessageEmbed()
    .setColor('RED')
    .setTitle('Başarısız')
    .setAuthor(message.author.tag, message.author.avatarURL({ size:1024, dynamic:true, format: "png"}))
    .setDescription(`Bu Komutu Kullanmak İçin <@&${ayarlar.muteYetkiliRolID}> Yetkisine Sahip Olmalısın!`) 
  
if (!message.member.roles.cache.has(ayarlar.muteYetkiliRolID)) return message.channel.send(permError);
  
const mutelog = message.guild.channels.cache.find(c => c.id === ayarlar.muteLogID)
const muterol = message.guild.roles.cache.find(r => r.id === ayarlar.mutedRolID)

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed()
.setColor('0x800d0d')
.setDescription(`${message.author}, lütfen bir kullanıcı etiketle !`))
          
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed()
  .setColor('0x800d0d')
  .setDescription(`${message.author}, lütfen mute atmam gereken kullanıcı belirt !`);
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
              {
return message.channel.send(new MessageEmbed()
.setColor('0x800d0d')
.setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`));
} else {
  if(!args[1]) { return message.channel.send('Lütfen Bir Süre Girin.') }
  let zaman = args[1]  
  .replace("sn", "s")
  .replace("dk", "m")
  .replace("sa", "h")
  .replace("gün", "d");
if (!zaman) { message.channel.send(new MessageEmbed()
  .setColor('0x800d0d')
  .setDescription(`Lütfen Bir zaman dilimi belirtin.`));
} else {
let sebep = args[2]
if(!sebep) return message.channel.send(new MessageEmbed()
.setColor('0x800d0d')
.setDescription(`Lütfen Bir sebep belirtiniz.`))  
                
let zamandilimi = zaman
.replace("m", " dakika")
.replace("s", " saniye")
.replace("h", " saat")
.replace("d", " d");
                  
let tumaylar = {
"01": "Ocak",  
"02": "Şubat", 
"03": "Mart",  
"04": "Nisan",  
"05": "Mayıs", 
"06": "Haziran", 
"07": "Temmuz",
"08": "Ağustos", 
"09": "Eylül", 
"10": "Ekim", 
"11": "Kasım", 
"12": "Aralık", 
}
let aylar = tumaylar; 
               {
let muteler = jdb.get(`tempmute`) || [];
if (!muteler.some(j => j.id == member.id)) {
kdb.add(`kullanici.${message.author.id}.mute`, 1);
data.add('case', 1)
const numara = await data.fetch('case')
moment.locale("tr");
};
                 
data.set(`muteli_${member.guild.id + member.id}`, 'muteli')
data.set(`süre_${member.id + member.guild.id}`, zamandilimi)
                 
message.react('✅')          
message.channel.send(new MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setColor('0x348f36')
.setTimestamp()
.setDescription(`${message.author} tarafından ${member} **${sebep}** sebebiyle **${zamandilimi} boyunca** mute atıldı`));
mutelog.send(
new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('ffdb55')
.setDescription(`
**Metin Kanallarında Susturuldu !**
**Kullanıcı:** <@${member.id}> (\`${member.id}\`)
**Yetkili:** <@${message.author.id}> (\`${message.author.id}\`)
**Süre:** \`${zamandilimi}\`
**Tarih:** (\`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\`)
        
`))
mute.roles.add(muterol)
message.react('✅')
} 
setTimeout(async function() {
mute.roles.remove(muterol)
mutelog.send(
new MessageEmbed()
.setColor('#494459')
.setTimestamp()
.setDescription(`
**Metin Kanallarında Susturulması Bitti !**
**Kullanıcı:** <@${member.id}> (\`${member.id}\`)
**Süre:** \`${zamandilimi}\`
**Tarih:** (\`${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\`)`)
);
}, ms(zaman));
        
}}}
 
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mute"],
    permLevel: 0,
    name: "mute"
  }
  
  exports.help = {
    name: "mute"
  };