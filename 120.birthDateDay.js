const findBirthDate = (age, month, day) => {
    const dateObj = new Date();
    let currentYear = dateObj.getFullYear();
    let currentMonth = dateObj.getMonth() + 1;
    let currentDate = dateObj.getDate();

    if(day > currentDate){
        currentDate = currentDate + 30;
        month = month + 1;
    }

    if(month > currentMonth){
        currentMonth = currentMonth + 12;
        age = age + 1;
    }

    const birthYear = currentYear - age;
    const birthMonth = currentMonth - month;
    const birthDate = currentDate - day;

    const finalDate = `"${birthMonth}/${birthDate}/${birthYear}"`;
    const dayName = new Date(finalDate).toLocaleDateString('default', { weekday: 'long' });

    return dayName;
}

console.log(findBirthDate(16, 5, 2));