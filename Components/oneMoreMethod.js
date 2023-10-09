let fName = "Mr"
let mName = "Omer"
let lName = "Shafiq"

let combinedName = () => {
    console.log(`hello, ${fName} ${mName} ${lName} , hope youre doing great`)
}
let goodMessage = () => {
    console.log(`hello, ${fName} ${mName} ${lName} ,  I have a great news for you `)
}
let badMessage = () => {
    console.log(`hello, ${fName} ${mName} ${lName} ,  I have a bad news for you `)
}


let callingCombinedName = combinedName();
goodMessage()
badMessage()