function budgetCalculator(ghori, phone, laptop){
	if(ghori === 0 && phone === 0 && laptop === 0){
		return "You can not select all to 0";
	}
	else if(ghori >= 0 && phone >= 0 && laptop >= 0){
		return ghori*50 + phone*100 + laptop*500;
	}
	else{
		return "You entered negative number or string, check and please try again";
	}
}

const total = budgetCalculator(0, 0, 1);
console.log(total);