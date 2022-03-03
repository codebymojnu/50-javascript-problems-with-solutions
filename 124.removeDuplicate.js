const removeDuplicate = (peoplesList) => {
    const newList = [];
    for (let i = 0; i < peoplesList.length; i++) {
        const people = peoplesList[i];
        if(peoplesList.indexOf(people) === peoplesList.lastIndexOf(people)){
            newList.push(people);
        }
        
    }
    return newList;
}

removeDuplicate(["Jobbar", "Abbaj", "Jamal", "Rahim", "Abbaj", "Rahim", "Unus", "Unus"])