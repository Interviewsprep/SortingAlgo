// Merge Sort

/*
1) Leaf worker
2) Internal node worker
     |------Merge the two sorted halves
     |------Gather phase 
     |------Copy the auxiliary array to original array
*/

function merge_sort(arr) {
    // Write your code here.
    return helper(arr, 0, arr.length - 1);
}

function  helper (arr, start, end) {
    //Base Case
    if (start === end) return [arr[start]];
    
    let mid = start + Math.floor((end - start) / 2);
    
    //Recursive
    let left = helper (arr, start, mid);
    let right = helper (arr, mid + 1, end);
    
    return merge(left, right);
}

function merge (left, right) {
    let a = 0, b = 0, merged = [];
    
    while (a < left.length && b < right.length){
        
        if (left[a] < right[b] ){
            merged.push(left[a++]);
        } else {
            merged.push(right[b++]);
        }
    }
    
    while (a < left.length) {
        merged.push(left[a++]);
    }
    
 while (b < right.length) {
        merged.push(right[b++]);
    }
    
    return merged;
}
