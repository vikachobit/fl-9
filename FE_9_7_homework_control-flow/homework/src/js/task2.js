let offer = confirm('Do you want to play a game?');
if (!offer) {
    alert('You did not become a millionaire, but can.');
} else {
    theGame()
}

function theGame() {
    let randomNum = Math.floor(Math.random() * 6);
    for (let i = 1; i <= 3; i++) {
        let userNum = prompt('Enter a number in range [0; 5]');
        if (randomNum === userNum) {
            switch (i) {
                case 1:
                    alert('You won 10$!');
                    break;
                case 2:
                    alert('You won 5$!');
                    break;
                case 3:
                    alert('You won 2$!');
                    break;
            }
            break;
        } else {
            alert('Attempts left:' );
        }
    }
}