function getSum(a,b){
    return a + b
}

function getDivisorsCnt(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0)count ++
    }
    return count
}
function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice/ (100 - salePercentage) * 100).toFixed(2)
}

exports.discoverOriginalPrice = discoverOriginalPrice;
exports.getSum = getSum;
exports.getDivisorsCnt = getDivisorsCnt;
