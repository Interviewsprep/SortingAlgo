/* Quick Sort

In place sorting and most stable sorting
Can be done using Lomudos Partioning and Hoare's Partitioning. 
https://www.interviewkickstart.com/blogs/learn/quick-sort#:~:text=Quicksort%20works%20by%20dividing%20a,or%20no%20elements%20is%20created.
*/ 


const swap=(arr,index1,index2)=>{
    let temp = arr[index2];
    arr[index2]=arr[index1];
    arr[index1]=temp;
}
const helper=(arr,start,end)=>{
    if(start>=end ){
        return arr
    }
    const pivotIndex = Math.floor(Math.random() * (end - start) + start)
    //lomudos partioning
    swap(arr, start, pivotIndex);
    let small=start;
        for (let big = start + 1; big <= end; big++) {
            if (arr[start] > arr[big]) {
                small++;
                swap(arr,small, big);
            }
        }
    swap(arr,small,start)
    
    helper(arr,start,small-1)
    helper(arr,small+1, end)
    return arr
    
}
function quick_sort(arr) {
    return helper(arr,0,arr.length-1)
}
