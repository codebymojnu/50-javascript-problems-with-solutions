function hotelCost(days){
	if(days <= 10){
		return days*100;
	}
	else if(days > 10 && days < 21){
		const first10 = 10*100;
		const daysRemain = days - 10;
		return first10 + daysRemain*80;
	}
	else if(days > 20 && days < 31){
		const first10 = 10*100;
		const second10 = 10*80;
		const daysRemain = days - 20;
		return first10 + second10 + daysRemain*50;
	}
	else{
		return "You type negative number or string. Please check and try again"
	}
}

const cost = hotelCost(21);
console.log(cost);