const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_+={}[]|:;<>./?".split("");

let passwordOne = document.getElementById("suggest1");
let passwordTwo = document.getElementById("suggest2");
let lengthEl = document.getElementById("length");
let addNumber = document.getElementById("Numbers");
let addSymbol = document.getElementById("Symbols");

function generatePassword() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    let passwordLength = lengthEl.value;
    let passwordCharacters = [...letters];

    if (addNumber.checked) {
        passwordCharacters = passwordCharacters.concat(numbers);
    }
    if (addSymbol.checked) {
        passwordCharacters = passwordCharacters.concat(symbols);
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * passwordCharacters.length);
        let randomIndex2 = Math.floor(Math.random() * passwordCharacters.length);
        passwordOne.textContent += passwordCharacters[randomIndex1];
        passwordTwo.textContent += passwordCharacters[randomIndex2];
    }
}

passwordOne.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOne.textContent).then(() => {
        alert("Password copied to clipboard!");
    });
});

passwordTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwo.textContent).then(() => {
        alert("Password copied to clipboard!");
    });
});
