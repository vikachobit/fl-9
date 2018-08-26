function getClosestToZero(...num) {
    return num.reduce((accumulator, current) => {
        return Math.abs(accumulator) > Math.abs(current) ? current : accumulator
    })
}
