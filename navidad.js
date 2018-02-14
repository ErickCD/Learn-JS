function navidad(){
	var w, x = 0, y = 0, z = 0;
	var n = 9;
	n = n * 2 -1;
	console.log("Feliz navidad");
	
	for(w=1; w <=n ; w+=2){
		for(x=1; x <=(n-w); x+=2){
			console.log(" ");
			
		}
		
		for(y=1 ; y<=w ; y++){
			console.log("*");
		}
		console.log();
	}
	
	for(z=1 ; z<=2 ; z++){
		console.log("       ***");
	}
}

navidad();