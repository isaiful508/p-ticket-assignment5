// const allSeats = document.getElementsByClassName('seats');

// let count = 0;
// // let selectedSeats = [];
// for (const seat of allSeats) {
//     seat.addEventListener('click', function (event) {
//         // get the number
//         count = count + 1;
//         // set text into display using function
//         setInnerText('seat-count', count);
//         // seat.classList.add('bg-[#1dd100]')

//         // inceiment from seats left
//         const totalSeat = document.getElementById('total-seats');
//         const totalSeatText = totalSeat.innerText;
//         const avaiableSeat = parseInt(totalSeatText);
//         const remainingSeat = avaiableSeat - 1;
//         setInnerText('total-seats', remainingSeat);


//         //    set tbody through append
//         const seatName = seat.innerText;
//         setTableData(seatName);

//         //    ticket price calculation
//         const seatPriceText = document.getElementById('seat-price').innerText;
//         const seatPrice = parseFloat(seatPriceText);
//         const totalTicketPrice = count * seatPrice
//         setInnerText('total-price', totalTicketPrice);
//         // grand total display
//         setInnerText('grand-total', totalTicketPrice);

//         // condition apply for seat select
//         if(count <= 4){
//             seat.classList.add('bg-[#1dd100]');
//         }
//     //     if (count === 4) {
//     //         for (const seat of allSeats) {
//     //             seat.removeEventListener('click', seatClickHandler);
//     //         }
//     //     }


//     // for (const seat of allSeats) {
//     //     seat.addEventListener('click', seatClickHandler);
//     // }






//     })
// }

const allSeats = document.getElementsByClassName('seats');

let count = 0;

function seatClickHandler(event) {
    // get the number
    count = count + 1;
    // set text into display using function
    setInnerText('seat-count', count);
    // seat.classList.add('bg-[#1dd100]')

    // decrement from seats left
    const totalSeat = document.getElementById('total-seats');
    const totalSeatText = totalSeat.innerText;
    const availableSeat = parseInt(totalSeatText);
    const remainingSeat = availableSeat - 1;
    setInnerText('total-seats', remainingSeat);


    const seatName = this.innerText;
    setTableData(seatName);

    // set price

    const seatPriceText = document.getElementById('seat-price').innerText;
    const seatPrice = parseFloat(seatPriceText);
    const totalTicketPrice = count * seatPrice;
    setInnerText('total-price', totalTicketPrice);
    setInnerText('grand-total', totalTicketPrice);


    if (count <= 4) {
        this.classList.add('bg-[#1dd100]');
    }


    if (count === 4) {
        for (const seat of allSeats) {
            seat.removeEventListener('click', seatClickHandler);
        }
    }
}

for (const seat of allSeats) {
    seat.addEventListener('click', seatClickHandler);
}

// get apply btn and set coupon
const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function () {

    // get the value from input field
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    let willDiscountPrice = 2200;

    if (count === 4) {
        if (inputFieldValue === 'NEW15') {
            let discountPrice = willDiscountPrice - (willDiscountPrice * 15) / 100;
            setInnerText('grand-total', discountPrice);
            
            // append discound price
            const discountDiv = document.getElementById('priceDiscountContainer');

            const firstH1 = document.createElement('h1');
            firstH1.textContent = 'Discount Price';

            const secondH1 = document.createElement('h1');
            secondH1.textContent = 'BDT 330';

            discountDiv.appendChild(firstH1);
            discountDiv.appendChild(secondH1);
            
            
            
            // hide the button
            applyBtn.classList.add('hidden');
            
            // remove text in input field
            

        }else if(inputFieldValue === 'Couple 20'){
            let discountPrice = willDiscountPrice - (willDiscountPrice * 20) / 100;
            setInnerText('grand-total', discountPrice);
            // append discound price
            const discountDiv = document.getElementById('priceDiscountContainer');

            const firstH1 = document.createElement('h1');
            firstH1.textContent = 'Discount Price';

            const secondH1 = document.createElement('h1');
            secondH1.textContent = 'BDT 440';

            discountDiv.appendChild(firstH1);
            discountDiv.appendChild(secondH1);

            // hide the button
            applyBtn.classList.add('hidden');

        }
        
        else {
            alert('Please input a valid coupon')
        }

    } else {
        alert('Please at least buy 4 tickets')
    }



})