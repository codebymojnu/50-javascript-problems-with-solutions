function checkLeapYearOrNot(year) {
    if(year%400 == 0){
        return year+ " is a Leap Year";
    }
    else{
        if(year%4 == 0 && year%100 != 0){
            return year+ " is a Leap Year";
        }
        else{
            return year+ " is not a Leap Year";
        }
    }
}
console.log(checkLeapYearOrNot(1700));