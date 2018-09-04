const cardValidator = (num) => {
  var num = num;

  if (num === '' || num < 10) {
    return ('Parâmetro Inválido. Digite um número para validação.');
  }

  if (!isNaN(num)) {
    var cardNumber = num.toString();

    cardNumber = cardNumber.split('').reverse();
    var result = 0;

    for (i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        var product = cardNumber[i] * 2;
        if (product > 9) {
          product -= 9;
        }
        cardNumber.splice(i, 1, product);
      }
      result += parseInt(cardNumber[i]);
    }

    if (result % 10 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return ('Digite apenas números!');
  }
};

module.exports = cardValidator;
