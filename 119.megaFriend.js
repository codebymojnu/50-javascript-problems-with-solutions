function megaFriend(friendsName){
	let largest = friendsName[0].length;
	let largestName = friendsName[0];
	for(let i=0; i < friendsName.length; i++){
		const element = friendsName[i].length;
		if(element > largest){
			largest = friendsName[i].length;
			largestName = friendsName[i];
		}
	}
	return largestName;
}

console.log(megaFriend(["Mojnu", "Morshed", "Rashedul", "Umar Farooq"]));