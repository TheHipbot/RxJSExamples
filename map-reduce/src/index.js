var Rx = require('rx');
var request = Rx.Observable.fromCallback(require('request'));

var mapper = require('./mapper');
var reducer = require('./reducer');

var wordStream = request('http://pastebin.com/raw/EDyzfWat')
    .flatMap(function (response) {
        return Rx.Observable.fromArray(response[2].split(/(\s)/));
    })
    .map(function (word) {
        return word.trim().toLowerCase().replace(/(['"\\\.:,\(\)])/g, '');
    })
    .filter(function (line) {
        return line;
    })
    .reduce(function (res, word) {
        res[word] = (res[word]) ? res[word] + 1 : 1;
        return res;
    }, {});

wordStream.subscribe(function (data) {
    console.log(data);
});
