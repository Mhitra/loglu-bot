const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        var seriler = [
            "Young Sorcerer Master - https://ayatoon.com/manga/young-sorcerer-master",
            "I Have A Dragon In My Body - https://ayatoon.com/manga/i-have-a-dragon-in-my-body/",
            "Why The King Needs A Secretary - https://ayatoon.com/manga/why-the-king-needs-a-secretary/",
            "Leydi’nin Değişimi - https://ayatoon.com/manga/leydinin-degisimii/",
            "It Starts With a Kingpin Account - https://ayatoon.com/manga/it-starts-with-a-kingpin-account/",
            "Reincarnated War God - https://ayatoon.com/manga/reincarnated-war-god/",
            "Magician From The Future - https://ayatoon.com/manga/magician-from-the-future/",
            "The Demon King Who Lost His Job - https://ayatoon.com/manga/the-demon-king-who-lost-his-job/",
            "The Duke’s Hidden Baby: BOGO! - https://ayatoon.com/manga/the-dukes-hidden-baby-bogo/",
            "Heaven Shop Agent - https://ayatoon.com/manga/heaven-shop-agent/ ",
            "Lian Fei Wei Bao - https://ayatoon.com/manga/lian-fei-wei-bao/",
            "Doomsday Girlfriend: My Backyard Leads To Doomsday - https://ayatoon.com/manga/doomsday-girlfriend-my-backyard-leads-to-doomsday/",
            "I Can Snatch 999 Types of Abilities- https://ayatoon.com/manga/i-can-snatch-999-types-of-abilities-rework/",
            "Emperor LingTian - https://ayatoon.com/manga/emperor-lingtian/"



















        ]

        let serirandom = seriler[Math.floor(Math.random() * seriler.length)]

        const seri = new Discord.MessageEmbed()
        .setDescription("**" + serirandom + "**")
        .setColor('RANDOM')
        message.channel.send(seri)
    }


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['seriöner','seri-öner','seriler','seri'],
        permLevel: 0,
      };
      
      exports.help = {
        name: 'seri-öner',
        description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
        usage: 'seri-öner'
      };//Mhitra yaptı.