const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const cardValidator = require('../lib/index');

describe('cardValidator()', function() {
  context('when there is no parameter', () => {
    it('should throw an error', () => {
      assert.throw(function() {
        cardValidator();
      }, 'Parâmetro Inválido. Digite um número de cartão para validação.');
    });
  });

  context('when number is a string', () => {
    it('should throw an error', () => {
      assert.throw(function() {
        cardValidator('Texto');
      }, 'Digite apenas números!');
    });
  });

  context('when the number is an integer and there is only one digit', () => {
    it('should throw an error', () => {
      assert.throw(function() {
        cardValidator(9);
      }, 'Digite um número correto de cartão para validação.');
    });
  });

  context('when the number is an integer and is a valid card', () => {
    it('should return true', () => {
      assert.equal(cardValidator(36490102462661), true);
    });
  });

  context('when the card is invalid', () => {
    it('should return false', () => {
      assert.equal(cardValidator(12345678912345), false);
    });
  });
});
