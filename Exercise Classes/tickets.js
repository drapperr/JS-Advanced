function sort(arr,sortingCriterion){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }

    let tickets=[];

    arr.forEach(element => {
        let args=element.split('|');
        tickets.push(new Ticket(args[0],+args[1],args[2]));
    });
    if (sortingCriterion==='price') {
        tickets.sort((a,b)=>a.price-b.price);
    }else{
        tickets.sort((a,b)=>a[sortingCriterion].localeCompare(b[sortingCriterion]));
    }
    

    return tickets;
}

console.log(sort(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
))