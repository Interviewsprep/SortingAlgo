// remember playing cards 

function insertion_sort(arr) {
// Get the length of the input array
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    // Store the current element as the temp
    let temp = arr[i];

    // Initialize the index of the element that should be before the temp
    let j = i - 1;

    // Move elements of A[0..i-1], that are greater than temp, to one position ahead of their current position
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the temp at its correct sorted position
    arr[j + 1] = temp;
  }

  return arr;
}
