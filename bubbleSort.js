// This is the worst sorting algorithm

function bubbleSort(arr){
  const n = arr.length
  let isSwapped

  for(let i = 0; i < n-1; i++){
    isSwapped = false;
      for(let j = 0; j < n-i -1; j++){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
        isSwapped = false
      }
    }

    if(!isSwapped) {
      break
      }
  }
  return arr
}
