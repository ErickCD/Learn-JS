function multiplicier(factor){
	return function(number){
		return number * factor;
	};
}

var twice = multiplicier(2);
console.log(twice(5));