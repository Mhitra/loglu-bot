const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
    exports.run = (client, message, args) => {
        // Yetki İçin
        if(!message.member.roles.cache.get(ayarlar.yetkili)){
            const yetki = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(` ${message.author} **Bu Kodu Kullanmak İçin Yeterli Yetkin Bulunmuyor...** `)
            return message.channel.send(yetki).then(x => x.delete({timeout: 30000}))
       }

        let mesaj = args.slice(0).join(' ')

      
        if(!mesaj){
            const angel = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Duyuruya Atacağım Mesajıda Gir.**`)
            .setColor('BLACK')
            .setFooter('AyaToon.com')
            return message.channel.send(angel)
        }

        if(mesaj){
            client.channels.cache.get(ayarlar.DuyuruKanalID).send(`${mesaj} @everyone`)
        }
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['duyuru','duyuru-yap','duyuruyap'],
        permLevel: 0
      };
      //Mhitra
      exports.help = {
        name: 'duyuru',
        description: 'Kod denemek için kullanılır.',
        usage: 'duyur'
      };