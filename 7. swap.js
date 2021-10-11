//using temp

let a = 10;
let b = 20;
console.log("Before Swap: ", "a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap: ", "a =", a, "b =", b);

//swap without temp

let morshed = "Arfina";
let mojnu = "Bithe";
console.log("Before Swap: ", "morshed =", morshed, "mojnu =", mojnu);
[morshed, mojnu] = [mojnu, morshed];
console.log("After Swap: ", "morshed =", morshed, "mojnu =", mojnu);

//swap without temp

let mor = 1;
let moj = 0;
console.log("Before Swap: ", "morshed =", mor, "mojnu =", moj);
mor = mor + moj;
moj = mor - moj;
mor = mor - moj;
console.log("After Swap: ", "morshed =", mor, "mojnu =", moj);
