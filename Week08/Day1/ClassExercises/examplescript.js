document.getElementById('button').onclick = function addRow() {
    let table = document.getElementById('sampleTable');
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerText = 'New Cell1';
    cell2.innerText = 'New Cell2';
}

// Add a few event listener to the button. The event listeners should change the 
// style of the button

document.getElementById('jsstyle').onclick = function styleButton() {
    let newButton = document.getElementById('jsstyle');
    newButton.style.backgroundColor = 'blue';
    newButton.style.color = 'white';
    newButton.style.border = '1px solid purple';
}


// In a JS file, write a JavaScript function to get the values of First 
// and Last name of the following form

const form = document.getElementById('form1');

  form.addEventListener('submit', function (e) {
    let firstName = form.fname.value;
    let lastName = form.lname.value;

    alert('First Name: ' + firstName + ', Last Name: ' + lastName);
  });