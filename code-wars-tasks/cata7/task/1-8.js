function sumsInArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        newArr.push(sum)
    }
    return newArr
}

module.exports = sumsInArray;