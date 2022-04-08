// get the textboxes
const encrypted = document.getElementById("encrypted");
const decrypted = document.getElementById("decrypted");

// Alphebet as an array
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// set up event listener for the decrypt textbox
decrypted.addEventListener("keyup", function (event) {
  encryptedMsg = encrypt(decrypted.value);
  encrypted.value = encryptedMsg;
});

// function to encrypt DO YOUR WORK INSIDE THIS FUNCTION
function encrypt(msg) {
  msg = msg.split("");
  let encryptedMsg = "";
  msg.map((letter, i) => {
    let char = msg[i];
    let index = alphabet.indexOf(letter);
    if (index !== -1 && index <= 22) {
      encryptedMsg += alphabet[index + 3];
    } else if (index !== -1 && index > 22) {
      encryptedMsg += alphabet[index - 23];
    } else {
      encryptedMsg += char;
    }
  });
  return encryptedMsg;
}
