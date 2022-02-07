function isPronic(n){
    for(let i = 0; i <= n; i++){
        if(i*(i+1)===n) return true
    }
    return false
}

module.exports = isPronic;