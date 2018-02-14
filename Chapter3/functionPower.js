function power(base, exponent){
	if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0 ; count < exponent ; count++ )
		result *= base;
	return result;
};

console.log("Function power with one element", power(4));
// -> 16
console.log("Function power with two elements " + power(4, 3));
// -> 64