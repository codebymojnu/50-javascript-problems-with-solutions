function wordCount(sentece) {
    const word = sentece.split(" ");
    const numberOfWord = word.length;
    //const char = (word.toString()).length;
    return "Number of Word: " + numberOfWord;
}
console.log(wordCount("I Love you"))