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
//   work should be happening between these two lines of code
  let encryptedMsg = "";
  return encryptedMsg;
}
