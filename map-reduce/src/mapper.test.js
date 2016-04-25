var expect = require('chai').expect;
var map = require('./mapper.js');
var Rx = require('rx');

describe('the map module', function () {
    it('should be a function', function () {
	expect(map).to.be.a('function');
    });

    it('should return an observable', function () {
	expect(map('http://fakeurl.com').subscribe).to.be.a('function');
    });
});
