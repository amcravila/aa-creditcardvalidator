const cardValidator = (cardNumber) => {
  if (typeof cardNumber === 'undefined') {
    throw new Error('Parâmetro Inválido. Digite um número de cartão para validação.');
  }

  if (typeof cardNumber === 'string') {
    throw new Error('Digite apenas números!');
  }

  if (cardNumber < 10) {
    throw new Error('Digite um número correto de cartão para validação.');
  } else {
    function reverseInteger(number) {
      let rev = 0;
      while (number !== 0) {
        rev = rev * 10 + number % 10;
        number = Math.floor(number / 10);
      }
      return rev;
    }

    let reverseCardNumber = reverseInteger(cardNumber);
    reverseCardNumber = reverseCardNumber.toString().split('');
    let result = 0;
    let product;

    for (i = 0; i < reverseCardNumber.length; i++) {
      if (i % 2 !== 0) {
        product = reverseCardNumber[i] * 2;
        if (product > 9) {
          product -= 9;
        }
        reverseCardNumber.splice(i, 1, product);
      }
      result += parseInt(reverseCardNumber[i]);
    }

    if (result % 10 !== 0) {
      return false;
    }
    return true;
  }
};

module.exports = cardValidator;
