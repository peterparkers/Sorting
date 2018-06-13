// Bubble sort algorithms
var array = [];

sort = array => {
    let arrSorted = [...array];
    let arrLen = array.length;
    let i, j, temp;
    for (i = 0; i < arrLen; i++) {
        for (j = 0; j < i + 1; j++) {
            if (arrSorted[j] > arrSorted[j+1]) {
                temp = arrSorted[j];
                arrSorted[j] = arrSorted[j+1];
                arrSorted[j+1] = temp;
            }
        }
    }
    return arrSorted;
}

//Quick sort
