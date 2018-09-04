const mocha = require('mocha');
var assert = require('assert');
const cardValidator = require('../lib/index');

describe('cardValidator()', function() {
  describe('when there is no parameter', () => {
    it('should throw an error', () => {
      assert.equal(cardValidator(''), 'Parâmetro Inválido. Digite um número para validação.');
    });
  });

  describe('when number is a string', () => {
    it('should throw an error', () => {
      assert.equal(cardValidator('Texto'), 'Digite apenas números!');
    });
  });

  describe('when the number is an integer and there is only one digit', () => {
    it('should throw an error', () => {
      assert.equal(cardValidator(1), 'Parâmetro Inválido. Digite um número para validação.');
    });
  });

  describe('when the number is an integer and is a valid card', () => {
    it('should return true', () => {
      assert.equal(cardValidator(36490102462661), true);
    });
  });

  describe('when the card is invalid', () => {
    it('should return false', () => {
      assert.equal(cardValidator(12345678912345), false);
    });
  });
});
