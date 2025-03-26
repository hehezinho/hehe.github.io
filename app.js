// Function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Handle form submission
function submitName() {
    const name = document.getElementById('nameInput').value;

    if (!name.trim()) {
        alert('Please enter your name.');
        return;
    }

    const reversed = reverseString(name);
    document.getElementById('result').innerText = `${name} backwards is ${reversed}`;
}
