var x = "Outside";

var f1 = function(){
	var x = "inside f1";
	console.log("Internal x = " + x);
};

f1();
console.log(x);
// -> Outside

var f2 = function(){
	x = "inside f2";
};

f2();
console.log(x);
// -> inside f2