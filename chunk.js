const chunkArray = (arr, len) => {
    // init chunk arr
    const chunkedArr = [];

    //loop through arr
    arr.forEach(val => {
        //bet last element
        const last = chunkedArr[chunkedArr.length - 1];

        // check if last and if last length is equal to the chunck len
        if(!last || last.length ===len) {
            chunkedArr.push([val]);
        }else{
            last.push(val);
        }
    })

    return chunkedArr;
}

module.exports = chunkArray;