const findLargeName = (friends) => {
    let largeName = friends[0];
    for (let i = 1; i < friends.length; i++) {
        const friend = friends[i];
        if(friend.length > largeName.length){
            largeName = friend;
        }
    }
    return largeName;
}

console.log(findLargeName(["Ariful", "Morshed", "Atabur", "Rashidul", "Asaduzzaman", "Sorif", "Shohag", "Shuvo"]))