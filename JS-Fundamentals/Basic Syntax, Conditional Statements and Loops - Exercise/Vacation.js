function solve(countOfPeople,typeOfPeople,dayOfWeek){
    let total=0;

    if (typeOfPeople=='Students') {
        if (dayOfWeek=='Friday') {
            total=countOfPeople*8.45;
        } else if (dayOfWeek=='Saturday') {
            total=countOfPeople*9.80;
        } else if (dayOfWeek=='Sunday') {
            total=countOfPeople*10.46;
        }

        if (countOfPeople>=30) {
            total=total*0.85;
        }
    } else if (typeOfPeople=='Business') {
        if (countOfPeople>=100) {
        countOfPeople=Math.max(countOfPeople-10,0);
        }

        if (dayOfWeek=='Friday') {
            total=countOfPeople*10.90;
        } else if (dayOfWeek=='Saturday') {
            total=countOfPeople*15.60;
        } else if (dayOfWeek=='Sunday') {
            total=countOfPeople*16;
        }
    } else if (typeOfPeople=='Regular') {
        if (dayOfWeek=='Friday') {
            total=countOfPeople*15;
        } else if (dayOfWeek=='Saturday') {
            total=countOfPeople*20;
        } else if (dayOfWeek=='Sunday') {
            total=countOfPeople*22.50;
        }

        if (countOfPeople>=10&&countOfPeople<=20) {
            total=total*0.95;
        }
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}