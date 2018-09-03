const cardValidator = (num) => {
  if (!num) {
    throw 'Invalid Argument';
  } return num;


  // if (!num) {
  //   return 'Digite um número para validação!';
  // }
  //
  // var cardNumber = num;
  //
  // cardNumber = cardNumber.split('').reverse();
  // var result = 0;
  //
  // for (i = 0; i < cardNumber.length; i++) {
  //   if (i % 2 !== 0) {
  //     var product = cardNumber[i] * 2;
  //     if (product > 9) {
  //       product -= 9;
  //       cardNumber.splice(i, 1, product);
  //     }
  //   }
  //   result += parseInt(cardNumber[i]);
  // }
  //
  // if (result % 10 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
};


// function onlyNumbers(num) {
//   var er = /[^0-9.]/;
//   er.lastIndex = 0;
//   var cardNumber = num;
//   if (er.test(cardNumber.value)) {
//     cardNumber.value = "";
//   }
// };

module.exports = cardValidator;
