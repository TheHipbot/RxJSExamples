var expect = require('chai').expect;
var reducer = require('./reducer');

describe('the reduce module', function () {
    it('should be a function', function () {
	expect(reducer).to.be.a('function');
    });

    it('should return an observable', function () {
	expect(reducer().subscribe).to.be.a('function');
    });
});
