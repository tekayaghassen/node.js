const fs = require('fs')
const stuff = fs.readFileSync(process.argv[2])
const Lines = stuff.toString().split('\n').length - 1
console.log(Lines)