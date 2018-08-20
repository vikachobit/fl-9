const MAX_PRIZE = 10;
const AMOUNT = 5;
let totalPrize = 0;
let offer = confirm('Do you want to play a game?');
let refuse = 'You did not become a millionaire, but can.';
if (!offer) {
    alert(refuse);
} else {
    startGame(MAX_PRIZE, AMOUNT, totalPrize)
}
/*eslint no-magic-numbers: ["error", { "ignore": [0,1,2,3,4] }]*/
function startGame(maxPrize, range, totalSum) {
    let randomNum = Math.floor(Math.random() * (range + 1));
    let currentPrize = maxPrize;
    for (let i = 0; i <= 2; i++) {
        let userNum = parseFloat(prompt(`Enter a number in range [0 ; ${range}]` + `\n` +
            `Attempts left: ${3 - i}` + `\n` +
            `Total prize: ${totalSum}$` + `\n` +
            `Maximum possible prize in this game: ${currentPrize}$`));
        if (randomNum === userNum) {
            switch (i) {
                case 0:
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$` + `\n` +
                        `Do you want to continue?`) ? startGame(maxPrize * 3, range * 2, totalSum) : endGame(totalSum);
                    break;
                case 1:
                    currentPrize = maxPrize / 2;
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$`+`\n`+
                    `Do you want to continue?`) ? startGame(maxPrize * 3, range * 2, totalSum) : endGame(totalSum);
                    break;
                case 2:
                    currentPrize = Math.floor(maxPrize / 4);
                    totalSum += currentPrize;
                    confirm(`Congratulation! Your price is ${currentPrize}$`+`\n`+
                    `Do you want to continue?`) ? startGame(maxPrize * 3, range * 2, totalSum) : endGame(totalSum);
                    break;
                default: break;
            }
            break;
        } else {
            switch (i) {
                case 1:
                    currentPrize = maxPrize / 2;
                    break;
                case 2:
                    currentPrize = Math.floor(maxPrize / 4);
                    break;
                case 3:
                    endGame(totalPrize);
                    break;
                default: break;
            }
        }
    }
}

function endGame(prize) {
    alert(`Thank you for a game. Your prize is: ${prize}$`);
    if (confirm('Do you want to try again?')) {
        startGame(MAX_PRIZE, AMOUNT, totalPrize)
    } else {
        alert(refuse);
    }
}