function heapify(arr, rootIndex, n) {
    let currentRootIndex = rootIndex;

    while (true) {
        let i = currentRootIndex;
        let leftChildIndex = 2 * i + 1;
        let rightChildIndex = 2 * i + 2;

        // Finding the index of the largest value among:
        // arr[currentRootIndex], arr[leftChildIndex], and arr[rightChildIndex].
        if (leftChildIndex < n && arr[leftChildIndex] > arr[i]) {
            i = leftChildIndex;
        }
        if (rightChildIndex < n && arr[rightChildIndex] > arr[i]) {
            i = rightChildIndex;
        }

        // The largest among the three considered values will now be the root of the Max-Heap
        // represented by arr[currentRootIndex ... n - 1].
        if (i !== currentRootIndex) {
            [arr[i], arr[currentRootIndex]] = [arr[currentRootIndex], arr[i]];
            currentRootIndex = i;
        } else {
            break;
        }
    }
}

function heap_sort(arr) {
    const n = arr.length;

    // Building a Max-Heap in a bottom-up manner.
    // Heapifying only the indices in range [0, n/2 - 1) because only these indices will have at least one
    // child node in the Max-Heap.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

/*

function heapify(array, sizeHeap, parentIndex) {
    let larger = parentIndex;
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * parentIndex + 2;

    if (leftChildIndex < sizeHeap && array[leftChildIndex] > array[larger]) {
        larger = leftChildIndex;
    }

    if (rightChildIndex < sizeHeap && array[rightChildIndex] > array[larger]) {
        larger = rightChildIndex;
    }

    if (larger != parentIndex) {
        [array[parentIndex], array[larger]] = [array[larger], array[parentIndex]];
        heapify(array, sizeHeap, larger);
    }
}

function heap_sort(array) {
    let sizeArray = array.length;

    for (let nonleafNodeIndex = Math.floor(sizeArray / 2) - 1; nonleafNodeIndex >= 0; nonleafNodeIndex--) {
        heapify(array, sizeArray, nonleafNodeIndex);
    }

    for (let lastHeapIndex = sizeArray - 1; lastHeapIndex >= 1; lastHeapIndex--) {
        [array[0], array[lastHeapIndex]] = [array[lastHeapIndex], array[0]];
        heapify(array, lastHeapIndex, 0);
    }


return array

}




/*
