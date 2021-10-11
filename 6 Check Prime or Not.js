function checkPrimeOrNot(n) {
    if(n==1){
        return 1;
    }
    else if(n==2){
        return n + " is a prime number";
    }
    else{
       for (let i = 2; i <= n/2; i++) {
           if(n%i == 0){
                return n + " is not a prime number";
           }
       }
       return n + " is a prime number";
    }
}
console.log(checkPrimeOrNot(11));