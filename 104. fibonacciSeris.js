// function fibonacci(pod) {
//     let fibo = [0, 1];
//     for (let i = 2; i < pod; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// console.log(fibonacci(5));
function fibonacciSeries(n) {
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0, 1];
    }
    else{
        const fibo = fibonacciSeries(n-1);
        const nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
console.log(fibonacciSeries(6));