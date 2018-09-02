var mocha = require('mocha');
var chai = require('chai');
var index = require('./index');
var expect = chai.expect;

describe('index', function() {
  describe('#cardValidator', function() {
    describe('when number is null', function() {
      it('should return string 0', function() {
        expect(formatter.valueToAPIFormat('')
        ).to.be.equal('0');
      });
    });
  });
});
