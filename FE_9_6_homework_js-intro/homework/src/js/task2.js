let a = parseFloat(prompt('Please enter first side', '10'));
let b = parseFloat(prompt('Please enter second side', '20'));
let angle = parseFloat(prompt('Please enter angle in between', '30'));
let message = '';
const ANGLE_SUM = 180;
if (typeof a === 'number' && typeof b === 'number' && typeof angle === 'number' &&
    a > 0 && b > 0) {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle* Math.PI / ANGLE_SUM));
    let p = a + b + c;
    let area = Math.sqrt(p/2*(p/2-a)*(p/2-b)*(p/2-c));
    let fixC = Math.floor(c * 100) / 100;
    let fixP = Math.floor(p * 100) / 100;
    let fixArea = Math.floor(area * 100) / 100;

    message += 'c length: '+fixC+'\n'+
    'Triangle square: '+fixArea+'\n'+
    'Triangle perimeter: '+fixP;
} else {
    message += 'Invalid data';
}
console.log(message);