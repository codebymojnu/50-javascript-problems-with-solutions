function convertInchToFeet(inch){
    const feet = inch/12;
    return feet.toFixed(2);
}
const mojnuFeet = convertInchToFeet(62);
console.log(mojnuFeet);

const daduFeet = convertInchToFeet(48);
console.log(daduFeet);