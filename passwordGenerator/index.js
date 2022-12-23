const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let minPassLength = 9
let maxPassLenght = 16
let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let password = {
    length: 9,
    hasNumbers: true,
    hasSpecialChars: true,
}

function generate() {
    let passwordLength = Math.floor ( Math.random() * 8 ) + 9
    let password = []
    for (i = 0; i < passwordLength; i++) {
        if ((Math.floor(Math.random() * 2) === 0)) {
            password.push(characters[Math.floor(Math.random() * (characters.length - 1))])
        } else {
            password.push(characters[Math.floor(Math.random() * (characters.length - 1))])
        }
    }
    let tempPassword = password.join('')
    console.log(tempPassword)
    console.log(shuffle(password).join(''))
    return tempPassword
}

function generatePassword() {
    pw1.textContent = generate()
    pw2.textContent = generate()
}