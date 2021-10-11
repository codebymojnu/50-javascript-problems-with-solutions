// find max of the given three values
function max(a, b, c) {
    // const max = Math.max(a, b, c);
    // return max;
    if( a > b && a> c){
        return a;
    }
    else if( b> a && b>c){
        return b;
    }
    else{
       return c;
    }
}
console.log(max(10, 2, 100))