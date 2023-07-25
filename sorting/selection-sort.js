const arr = [4, 8, 0, 3, 17, 9];


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimumItemIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minimumItemIndex] > arr[j]) {
                minimumItemIndex = j;
            }
        }

        [arr[i], arr[minimumItemIndex]] = [arr[minimumItemIndex], arr[i]]
    }
    return arr;
}

console.log(selectionSort(arr));