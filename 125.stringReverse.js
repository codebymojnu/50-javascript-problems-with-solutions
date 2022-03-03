const sentenceReverse = (sentence) => {
    const words = sentence.split(" ");
    const reverseWords = [];
    let reverseWord = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = word.length - 1; j >= 0; j--) {
            const charecter = words[i][j];
            reverseWord = reverseWord + charecter;
        }
        reverseWords.push(reverseWord);
        reverseWord = '';
    }
    const reverseSentence = reverseWords.join(' ');
    return reverseSentence;
}

console.log(sentenceReverse('raeD ,mimahS rertoP eturus lal ekut-kut itke otonotnuf repalog accevus .oin ekamoT rahked rop ekeht ima r etamuhg irap ,an etrop irap .an iuhduhS ramot ahtok enom .yoh ramA enom ,yoh ima ekamot esebolav .icelef imuT izar elkaht ekama .ebanaj'))  