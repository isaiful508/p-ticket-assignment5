const allSeats = document.getElementsByClassName('seats');

let count = 0;
let ticketPrice = 550;
for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        // get the number
        count = count + 1;
        // set text into display using function
        setInnerText('seat-count', count)

        // inceiment from seats left
        const totalSeat = document.getElementById('total-seats');
        const totalSeatText = totalSeat.innerText;
        const avaiableSeat = parseInt(totalSeatText);
        const remainingSeat = avaiableSeat - 1;
        setInnerText('total-seats', remainingSeat);


        //    set tbody through append
        const seatName = seat.innerText;
        setTableData(seatName);

        //    ticket price calculation
        const seatPriceText = document.getElementById('seat-price').innerText;
        const seatPrice = parseInt(seatPriceText);
        const totalTicketPrice = count * seatPrice
        setInnerText('total-price', totalTicketPrice);





    })
}