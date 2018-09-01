function userCard(index) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        tax = 0.5;
    const HUNDRED_PERCENT = 100;

    function getCardOptions() {
        return {
            key: index,
            balance,
            transactionLimit,
            historyLogs
        }
    }

    function updateHistoryLog(massage, amount) {
        historyLogs.push({
            operationType: massage,
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')

        })
    }

    function putCredits(amountOfCredits) {
        balance += amountOfCredits;
        updateHistoryLog('Received credits', amountOfCredits)
    }

    function takeCredits(amountOfCredits) {
        if (amountOfCredits >= transactionLimit) {
            console.log('Transaction limit is less than amount of credits you want to take')
        } else if (amountOfCredits >= balance) {
            console.log('Balance is less than amount of credits you want to take')
        } else {
            balance -= amountOfCredits;
            updateHistoryLog('Withdrawal credits', amountOfCredits)
        }
    }

    function setTransactionLimit(updateTransLimit) {
        transactionLimit = updateTransLimit;
        updateHistoryLog('Transaction limit change', updateTransLimit)
    }

    function transferCredits(amountOfCredits, recipientCard) {
        let taxedCredits = amountOfCredits + amountOfCredits * tax / HUNDRED_PERCENT;
        if (taxedCredits >= transactionLimit) {
            console.log('Transaction limit is less than amount of credits you want to take')
        } else if (taxedCredits >= balance) {
            console.log('Balance is less than amount of credits you want to take')
        } else {
            this.takeCredits(taxedCredits);
            recipientCard.putCredits(taxedCredits)
        }
    }

    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        const MAX_NUMBER_CARDS = 3;
        let cardsLength = this.cards.length;
        if (cardsLength < MAX_NUMBER_CARDS) {
            this.cards.push(userCard(cardsLength + 1))
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1]
    }
}

// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
