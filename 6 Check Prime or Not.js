function checkPrimeOrNot(n) {
    if(n==1){
        return 1;
    }
    else if(n==2){
        return n + " is a prime number";
    }
    else{
        if(n%2==0){
            return n + " is not a prime number"
        }
        else{
            return n + " is a prime number";
        }
    }
}
console.log(checkPrimeOrNot(16));