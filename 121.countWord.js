const countWord = (paragraph) => {
    let count = 0;

    for (let i = 0; i < paragraph.length; i++) {
        if(paragraph[i] === " " && paragraph[i - 1] !== " "){
            count++;
        }
    }

    // কিছু চাল্লু পোলাপান শেষে ১ টা whiteSpace দিলে সেটা handle করবে 
    if(paragraph[paragraph.length - 1] === " "){
        count--;
    }
    count++;
    return count;
}


const countSentence = (torKotha) => {
    let count = 0;
    for (let i = 0; i < torKotha.length; i++) {
        const charecter = torKotha[i];
        if(charecter === "." || charecter === "!" || charecter === "?"){
            count++;
        }
    }
    return count;
}

console.log(countSentence('tui onek sukhe manush hocis. Jhankar Mahbub vai je kosTo korce tar ekKanio tui koris nai. Ta tui jitbi ki kore?'))