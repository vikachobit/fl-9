function getMin(...num) {
    return num.reduce((accumulator, current) => accumulator < current ? accumulator : current)
}

