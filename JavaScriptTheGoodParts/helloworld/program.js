document.write('hello world!');

Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

var showFunc = Function.method('show', function() {
	console.info('renho');
});

showFunc();
