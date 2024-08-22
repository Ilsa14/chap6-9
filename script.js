// Function to generate and display the multiplication table
function generateTable() {
    // Get the user input
    var num = document.getElementById('numberInput').value;
    
    // If no input is provided, default to 5
    if (num === '') {
        num = 5;
    } else {
        num = parseInt(num, 10);
    }

    // Generate the multiplication table
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Multiplication Table for ${num}</h2>`;
    var table = '<ul>';

    for (var i = 1; i <= 10; i++) {
        table += `<li>${num} x ${i} = ${num * i}</li>`;
    }

    table += '</ul>';
    resultDiv.innerHTML += table;
}
