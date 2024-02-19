

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
            
            // append discount price
            const discountDiv = document.getElementById('priceDiscountContainer');

            const firstH1 = document.createElement('h1');
            firstH1.textContent = 'Discount Price';

            const secondH1 = document.createElement('h1');
            secondH1.textContent = 'BDT 330';

            discountDiv.appendChild(firstH1);
            discountDiv.appendChild(secondH1);
            
            
            
            // hide the input field
            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            
           
            

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

            // hide the inputfield
            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            

        }
        
        else {
            alert('Please input a valid coupon')
        }

    } else {
        alert('Please at least buy 4 tickets')
    }



})


// modal and form input

  
  function modalHide() {
    location.reload()
  }
  
  
  function formSubmit(e) {
    e.preventDefault();
  
    // name
    let name = document.getElementById("name");
    let nameValue = name.value;
    // number
    let number = document.getElementById("phone-number");
    let numberValue = number.value;
    // email
    let email = document.getElementById("email");
    let emailValue = email.value;
    let value = getValue("seat-count");
  
    if (numberValue.length == 11 && numberValue > 0 && value > 0 && nameValue !== "" &&  emailValue !== "") {
      console.log("Form submitted successfully.");
      modal.showModal()
      let inputs = document.querySelectorAll("input");
      inputs.forEach(function(input) {
        input.value = '';
      });
    } else {
      alert("Please fill in all required fields.");
    }
  }