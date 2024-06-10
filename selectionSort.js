// Selection sort

function selection_sort(arr) {
    const n = arr.length;

    // Each iteration will fill arr[i] with its appropriate value.
    for (let i = 0; i < n - 1; i++) {

        // Finding the index of the smallest element in arr[i ... n-1].
        let minElementIndex = i;
        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[minElementIndex]) {
                minElementIndex = j;
            }
        }

        [arr[i], arr[minElementIndex]] = [arr[minElementIndex], arr[i]];
    }

    return arr;
}
