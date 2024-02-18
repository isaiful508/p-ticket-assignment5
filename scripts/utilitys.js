// set inner text

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// set table data through click
function setTableData(seatNumber){
    const tBodyOfTicket =document.getElementById('t-body');
    const tableRow = document.createElement('tr');

    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    const thirdCol = document.createElement('td');

    firstCol.classList.add('py-2', 't-Data');
    thirdCol.classList.add('text-right');
    firstCol.textContent = seatNumber;
    secondCol.textContent = 'Economy';
    thirdCol.textContent = '550';

    tableRow.appendChild(firstCol);
    tableRow.appendChild(secondCol);
    tableRow.appendChild(thirdCol);
    
    tBodyOfTicket.appendChild(tableRow);
    


}