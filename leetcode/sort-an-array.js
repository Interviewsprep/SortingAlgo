/* https://leetcode.com/problems/sort-an-array/ *



// Using Merge Sort
var sortArray = function(nums) {
  // Base case: if the array has 0 or 1 element, it is already sorted
  if (nums.length <= 1) {
    return nums;
  }

  // Divide the array into two halves
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // Recursively sort the two halves
  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays
function merge(left, right) {
  const merged = [];
  let i = 0; // Pointer for left array
  let j = 0; // Pointer for right array

  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements from the left array
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  // Add the remaining elements from the right array
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

/*
var sortArray = function(nums)
function quickSortHelper(nums, start, end) {
        if (start >= end) return nums
    
        var pivotValue = nums[start]
        var smaller = start
        for (var i = start + 1; i <= end; i++) {
            var bigger = i
            if (nums[bigger] < pivotValue) {
                smaller++
                var smallerValue = nums[bigger]
                nums[bigger] = nums[smaller]
                nums[smaller] = smallerValue
            }
        }
        var smallerCache = nums[smaller]
        nums[smaller] = nums[start]
        nums[start] = smallerCache
        
        quickSortHelper(nums, start, smaller - 1)
        quickSortHelper(nums, smaller + 1, end)
        return nums
    }
    
    return quickSortHelper(nums, 0, nums.length - 1)
};
*/

/* In real jobs you will use only this

var sortArray = function(nums) {
    return nums.sort((a,b)=>a-b);
};

*/
