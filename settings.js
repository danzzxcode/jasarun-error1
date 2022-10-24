global.nomerOwner = "6289508391733"
global.runWith = "Web"
global.ownerName = "Human Noit"
global.lolkey = "ELAINA"
global.botName = "Elaina Botz" 
global.setMenu = "document"
global.docType = "docx"
global.Qoted = "m"
global.baileysMd = true
global.multi = true
global.prefa = "."
global.Console = false
global.publik = true
global.fake = "© Elaina" 
global.Myprofile = `ᴍʏ ᴘʀᴏғɪʟᴇ`
global.Mainlagi = `ᴍᴀɪɴ ʟᴀɢɪ`
global.On = "On"
global.Off = "Off"
global.textReply = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
global.replyType = "web1"
global.setWelcome = "type1"
global.auto = "recording"
global.antiSpam = false
global.autoBlockCmd = false
global.autoReport = true
global.autoLevel = true
global.autoBio = false
global.autoSticker = true
global.autoRespon = false
global.autoRead = false
global.autoVn = true
global.autoQuoted = true
global.autoButton = true
global.gamewaktu = 60
global.limitawal = 30
global.monayawal = 1000,
global.rpg = { darahawal: 100, besiawal: 15, goldawal: 10, emeraldawal: 5, umpanawal: 5, potionawal: 1 }
global.gcounti = { prem : 60, user : 20 } 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






