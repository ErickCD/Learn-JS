var landscape = function(){
	
	var result = "";
	
	var  flag = function(size){
		for(var count = 0; count < size ; count++)
			result += "_";
	};
	
	var mountain = function(size){
		result += "/";
		for(var count = 0; count < size ; count++)
			result += "'";
		result += "\\";
	};
	
	flag(3);
	mountain(4);
	flag(6);
	mountain(1);
	flag(1);
	return result;
};

console.log(landscape());
// -> ___/''''\______/'\_