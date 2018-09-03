const mocha = require('mocha');
const assert = require('chai').assert;
const index = require('../index');

describe('#cardValidator', () => {
  it('num deve ser uma string', () => {
    const num = '1234';
    assert.typeOf(num, 'string', 'num is a string');
  });

  it('num não pode ser nulo', () => {
    const num = '';
    assert.isUndefined(num, 'Digite um número para validação');
  });
});
