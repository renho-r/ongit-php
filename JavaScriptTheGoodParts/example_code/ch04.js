var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value)
    };

    helper(  );    // Invoke helper as a function.
};
var add = function (a, b) {
    return a + b;
};
myObject.double(  );
document.writeln(myObject.value);
