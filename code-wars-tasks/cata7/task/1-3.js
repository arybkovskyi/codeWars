function getSum( a,b ){
    let sum = 0;
    let c = Math.min(a,b);
    let d = Math.max(a,b)
    for(let i = c; i <= d; i++){
        sum += i
    }
    return sum
}

module.exports = getSum;