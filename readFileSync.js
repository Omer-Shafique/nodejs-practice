const {readFile, WriteFile} = require("fs")


readFile( './Components/Second.txt' ,  "utf8" ,(err , result) => {
if (err){
    console.log(err)
}
else {
    console.log (result)
}
})