function getMin(...num) {
    return num.reduce((accumulator, current) => accumulator < current ? accumulator : current)
}

console.log(getMin(5, 8, -9));