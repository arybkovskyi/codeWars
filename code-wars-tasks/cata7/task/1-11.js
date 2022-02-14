function totalBanknotes(n) {
    let count = 0;
    const nominal = [500, 200, 100, 50, 20, 10];
    if(n % 10 !== 0) return -1
    for (let banknote of nominal) {
        while (n >= banknote) {
            n -= banknote;
            count += 1;
        }
    }
    return count;
}

module.exports = totalBanknotes;
