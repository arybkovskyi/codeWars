function numericalTriangle(n){
    let str = ''
    for(let i = 1; i <= n; i++){

        for(j = 0; j < i ; j++){
            str += i + ' '
        }
        str = str.trim() + '\n'
    }
    return str.trim()

}

module.exports = numericalTriangle;