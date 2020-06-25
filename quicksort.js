function quicksort(array) {
    if (array.length === 0 || array.length === 1) return array;

    let pivot = array[0];

    let { smallers, equal, biggers } = spread(array, pivot);

    return quicksort(smallers).concat(equal).concat(quicksort(biggers));
}

function spread(arr, pivot) {
    let smallers = [];
    let equal = [];
    let biggers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            smallers.push(arr[i])
        }
        if (arr[i] == pivot) {
            equal.push(arr[i]);
        }
        if (arr[i] > pivot) {
            biggers.push(arr[i])
        }
    }
    return {
        smallers, equal, biggers
    }
}

console.log(quicksort([3, 44, 5, 7, 6, 2, 7]));