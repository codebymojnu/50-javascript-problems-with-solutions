function calculateFactorial(number) {
    // let factorial = 1;
    // for (let i = number; i > 1 ; i--) {
    //     factorial = factorial*i;  
    // }
    // return factorial;   
    if(number == 0){
        return 1;
    }
    else {
        return number*calculateFactorial(number -1);
    }
}
console.log(calculateFactorial(5))