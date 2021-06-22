function tickets(input, sortingOption) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        toString() {
            return `${this.destination} ${this.price} ${this.status}`;
        }
    }

    let tickets = [];

    for (let i = 0; i < input.length; i++) {
        let [destination, price, status] = input[i].split('|');
        tickets.push(new Ticket(destination, Number(price), status));
    }

    if (sortingOption == 'destination') {
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingOption == 'status') {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    } else if(sortingOption == 'price'){
        tickets = tickets.sort((a, b) => a.price - b.price);
    }

    return tickets;
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);