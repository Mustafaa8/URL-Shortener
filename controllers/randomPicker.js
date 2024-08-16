const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomCharPicker(){
    let result = ''
    for(i=0;i<10;i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return result
}

console.log(randomCharPicker())