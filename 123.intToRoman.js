function convertToRoman(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
   
   const part4 = Math.floor(num/1000);
   const part3 = Math.floor((num%1000)/100);
   const part2 = Math.floor((num%100)/10)
   const part1 = num%10;
   return thousands[part4] + hundreds[part3] + tens[part2] + units[part1];
   
   
   }
   
   console.log(convertToRoman(3999));