

module.exports = async (senderNumber, prefix, getLimit, getGLimit, gcount, command, user) => {


global.mess = {
wait: '_๐๐๐๐ฉ ๐ผ ๐๐๐ฃ๐ช๐ฉ๐ ใท_',
query: 'Masukan query',
success: '_๐๐ช๐๐๐๐จ๐จใท_',
limit: `Satu limit terpakaiเฒฅโฟเฒฅ\nSisa Limit kamu : ${getLimit(senderNumber, user)}`,
limitGame: `Satu limit game terpakaiเฒฅโฟเฒฅ\nSisa Limit kamu : ${getGLimit(senderNumber, gcount, user)}`, 
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam `,
wrongFormat: '_๐๐ค๐ง๐ข๐๐ฉ ๐๐ง๐ง๐ค๐ง, ๐ฉ๐ง๐ฎ ๐๐๐๐๐ฃใท_',

error: {
stick: '_๐๐ง๐ง๐ค๐ง, ๐๐ช๐จ๐ฉ ๐ฉ๐ง๐ฎ ๐ฉ๐ค ๐จ๐๐ฃ๐ ๐ ๐ฅ๐๐๐ฉ๐ช๐ง๐ใท_',
api: '_๐๐ง๐ง๐ค๐ง, ๐๐ฅ๐ ๐๐จ ๐ฃ๐ค๐ฉ ๐๐ค๐ช๐ฃ๐ใท_',
Iv: '_๐๐ง๐ง๐ค๐ง, ๐ฉ๐ง๐ฎ ๐ฉ๐ค ๐๐๐ซ๐ ๐ฉ๐๐ ๐๐ค๐ง๐ง๐๐๐ฉ ๐ก๐๐ฃ๐ ใท_',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command ใ *${command}* ใ telah di block oleh owner`,
Bsystem: `Command ใ *${command}* ใtelah di block oleh system karena terjadi error`
},

 only: {
prem : '_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฎ ๐ฅ๐ง๐๐ข๐๐ช๐ข ๐ช๐จ๐๐ง๐จใท_',
group: '_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฃ ๐๐ง๐ค๐ช๐ฅใท_',
owner: '_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฎ ๐ค๐ฌ๐ฃ๐๐งใท_',
admin: '_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ฎ ๐๐๐ข๐๐ฃใท_',
Badmin: '_๐พ๐๐ฃ ๐ค๐ฃ๐ก๐ฎ ๐๐ ๐ช๐จ๐๐ ๐๐ ๐ฉ๐๐ ๐๐ค๐ฉ ๐๐จ ๐๐ฃ ๐๐๐ข๐๐ฃใท_'
 }
  
 }

}





const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})