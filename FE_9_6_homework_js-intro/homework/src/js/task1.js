let price = Number(prompt('Please enter price', '4950'));
let discount = Number(prompt('Please enter discount', '30'));
let message = '';

if (typeof price === 'number' && typeof discount === 'number' &&
    price > 0 && discount > 0 && discount < 100) {
    let saved = Math.floor(price * discount) / 100;
    let priceWithDiscount = Math.floor((price - saved)*100)/100;

    message += 'Price without discount: ' + price + '\n' +
        'Discount: ' + discount + '%' + '\n' +
        'Price with discount:' + priceWithDiscount + '\n' +
        'Saved:' + saved;
} else {
    message += 'Invalid data';
}
console.log(message);