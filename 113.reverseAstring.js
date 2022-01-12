function reverseString(string) {
    let reverse = "";
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        reverse = char + reverse;
    }
    return reverse;
}
console.log(reverseString("bithe"))