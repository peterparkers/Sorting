var array = [];
var arrayDisplayString = "";
var countPush = 0;
var pushButton = document.getElementById("push-button");
var sortButton = document.getElementById("sort-button");
var arrayDisplay = document.getElementById("array-display");
pushButton.addEventListener("click", createArray);
sortButton.addEventListener("click", sortingAlgorithms);

function createArray () {
    var number = document.getElementById("number-input");
    if(number.value != "") {
        arrayDisplayString += countPush == 0 ? number.value : ", " + number.value;
        arrayDisplay.innerHTML = "[ " + arrayDisplayString + " ]";
        number.value = "";
        countPush++;
    }
}

function sortingAlgorithms () {
    
}

// Bubble sort
bubbleSort = array => {
    let arrSorted = [...array];
    let arrLen = array.length;
    let i, j, temp;
    for (i = 0; i < arrLen; i++) {
        for (j = 0; j < arrLen - 1; j++) {
            if (arrSorted[j] > arrSorted[j + 1]) {
                temp = arrSorted[j];
                arrSorted[j] = arrSorted[j + 1];
                arrSorted[j + 1] = temp;
            }
        }
    }
    return arrSorted;
}

// Merge sort
mergeSort = array => {

}

// Selection sort
selectionSort = array => {

}

// Insertion sort
insertionSort = array => {

}

// Quick sort
quickSort = array => {

}