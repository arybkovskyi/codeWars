//DISCOVER ORIGINAL PRICE (function)
function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice/ (100 - salePercentage) * 100).toFixed(2)
}

module.exports = discoverOriginalPrice;