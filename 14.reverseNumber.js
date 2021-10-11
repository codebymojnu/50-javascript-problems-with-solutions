function reverseNumber(n) {
    let rev = 0;
    if(n < 10 || n%10 == 0){
        const string = n.toString();
        let reverse = "";
        for (let i = 0; i < string.length; i++) {
        const char = string[i];
        reverse = char + reverse;
        }
        return reverse;
    }
    else{
        while(n != 0){
            const rem = n%10;
            rev = rev*10 + rem;
            n = Math.floor(n/10);
        }
        return rev;
    }
}
console.log(reverseNumber(500))