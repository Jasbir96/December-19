var ajax = require("./lib/filedownload");
var amt = 100;
var price = 20;
function chargeCreditCard() {
  amt = amt - price;
}

ajax.trackCheckout("I bought something").then(chargeCreditCard);

setTimeout(function delay() {
  console.log("Your remaining amt " + amt);
}, 100);
