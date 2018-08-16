let login = prompt('Please enter your login', '');
let password = '';
if (login) {
    if (login.length < 4) {
        alert('I don`t know any users having name length less than 4 symbols');
    } else if (login === 'User') {
        password = prompt('Please enter your password', '');
        greeting(password);
    } else {
        alert('I don’t know you')
    }
} else {
    alert('Canceled')
}

function greeting(password){
    if (password === 'SuperUser') {
        (new Date().getHours() < 20) ? alert('Good day!') : alert('Good evening!');
    } else {
        alert('Wrong password')
    }
}