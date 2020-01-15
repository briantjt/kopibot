const pdf = require('pdf-parse')
const fs = require('fs')

let databuffer = fs.readFileSync('./closure-feb.pdf')

pdf(databuffer).then(data => {
    console.log(data.text)
})