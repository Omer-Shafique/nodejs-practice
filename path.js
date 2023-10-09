const path = require('path')
const {readFileSync , writeFileSync }  = require('fs')
const { isUtf8 } = require('buffer')

const first = readFileSync('./Components/Finst.txt' , 'Utf8')
const second = readFileSync('./Components/Second.txt' , 'Utf8')
const myTry = readFileSync('./Components/oneMoreMethod.js' , 'Utf8')

writeFileSync('./Components/created-new-file' , 'this should be new file')
writeFileSync('./Components/SubFolder/test.txt' , 'what bout text.txt')


console.log (first, second , myTry ) 


// console.log(path.basename)
// console.log(path.delimiter)
// console.log(path.sep)
// console.log(path.dirname)
// console.log(path.format)
// console.log(path.join())