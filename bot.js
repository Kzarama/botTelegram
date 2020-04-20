//constante para usar telegraf
const Telegraf = require('telegraf')

//bot de telegraf y la api key
const bot = new Telegraf('1206945697:AAEBXp0E5gvzJ9hbcWYg3fk_7aDLkM33aWA')

//comando /start
bot.start((ctx) => {
    //bot.telegram.sendMessage(ctx.chat.id, 'bienvenido')
    ctx.reply('Welcome ' + ctx.from.first_name + ' ' + ctx.from.last_name);
    ctx.reply(`You are sended one ${ctx.updateSubTypes[0]}`)
})

//comando /help
bot.help((ctx) => {
    ctx.reply('Help!!');
})

//comando /settings
bot.settings((ctx) => {
    ctx.reply('Settings');
})

//comando /mycommand /myCommand
bot.command(['myCommand', 'mycommand'], (ctx) => {
    ctx.reply('my custom command')
})

//envia respuesta de cuando se envia computer
bot.hears('computer', ctx => {
    ctx.reply('Hey I am selling a computer')
})

//envia respuesta de cuando se envia un texto
// bot.on('text', ctx => {
//     ctx.reply('text message')
// })

//envia respuesta de cuando se envia un sticker
bot.on('sticker', ctx =>{
    ctx.reply('stricker xd')
})

//se menciona a cierto usuario
bot.mention('BotFather', (ctx) => {
    ctx.reply(' You mentioned someone')
})

//se menciona cierto numero
bot.phone('+57 318 709 8750', ctx => {
    ctx.reply('This is a your numberphone')
})

//hastag
bot.hashtag('programming', ctx => {
    ctx.reply('yes!! crack')
})

//lanza el bot
bot.launch()