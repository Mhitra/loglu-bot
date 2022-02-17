const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu",
     "Mhitra'nın biricik botu"    

      ];
    

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "Mhitra'nın biricik botu" );
        }, 2 * 5000);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`▪ Bot Kullanılmaya hazır hale getirildi! → \n \n \n \ » designed and developed by Mhitra. «`)
    }
// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
