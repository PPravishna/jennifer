function generateRandomNumber() {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('random-number').textContent = `Random Number: ${randomNumber}`;
}
