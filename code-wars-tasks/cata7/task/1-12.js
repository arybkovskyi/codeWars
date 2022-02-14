function FilterString(value) {
    let str = ''
    for(let each of value){
        if(isNaN(each) === false) {str += each}
    }
    return +str
}

module.exports = FilterString