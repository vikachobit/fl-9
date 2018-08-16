const MAX_PRIZE = 10;
const AMOUNT = 6;
let offer = confirm('Do you want to play a game?');
if (!offer) {
    alert('You did not become a millionaire, but can.');
} else {
    theGame()
}

function theGame() {
    let randomNum = Math.floor(Math.random() * AMOUNT);
    console.log(randomNum);
    for (let i = 1; i <= 3; i++) {
        let userNum = parseFloat(prompt('Enter a number in range [0; 5]', ''));
        if (randomNum === userNum) {
            switch (i) {
                case 1:
                    confirm(`Congratulation! Your price is ${MAX_PRIZE}$.  Do you want to continue?`);
                    break;
                case 2:
                    alert(`Congratulation! Your price is ${MAX_PRIZE / 2}$.  Do you want to continue?`);
                    break;
                case 3:
                    alert(`Congratulation! Your price is ${Math.floor(MAX_PRIZE / 4)}$.  Do you want to continue?`);
                    break;
            }
            break;
        } else if (!!(3 - i)) {
            alert(`Attempts left: ${(3 - i)}`);
        } else {
            alert('Thank you for a game. Your prize is: 0$')
        }
    }

}