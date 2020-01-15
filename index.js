require('dotenv').config()
const parser = require('pdf-parse')
const TelegramBot = require('node-telegram-bot-api')
const firebase = require('firebase')

const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, {polling : true})

bot.on('message', (msg) => {
    console.log(msg)
    bot.sendMessage(msg.chat.id, 'General Kenobi!')
})