var Rx = require('rx');

module.exports = function mapper(url) {
    return Rx.Observable.create(function (observer) {
	observer.onComplete();
    });
};
