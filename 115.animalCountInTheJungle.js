function animalCount(depth){
	let animal = 0;
	if(depth <= 10){
		animal = animal + depth*50;
		return animal;
	}
	else if(depth <= 20){
		const firstPart = 10*50;
		const remaining = depth - 10;
		animal = firstPart + remaining*100;
		return animal;
	}
	else if(depth <= 30){
		const firstPart = 10*50;
		const secondPart = 10*100;
		const remaining = depth - 20;
		animal = firstPart + secondPart + remaining*500;
		return animal;
	}
	else{
		return "May be you are died";
	}
}
console.log(animalCount(21));