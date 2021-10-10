function theLargest(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    console.log(largest);
}
theLargest([1, 2, 3, 6, 4, 2, 1])