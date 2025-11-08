// function to devide the array into two halves
function devideArr(arr){
    if(arr.length <= 1) return arr;

    const mid = arr.length / 2;
    const left = arr.slice(0 , mid);
    const right = arr.slice(mid , arr.length);

    return {left , right}
}

// function for merging two arrays
function mergeArr(left , right){
    let merged = [];
    let i = 0 , j = 0;

    // loop until we reach the end of arrays
    while(i < left.length && j < right.length){
        // compare elements of both arrays and push them sorted
        if(left[i] < right[j]){
            // if the element from i is smaller than j
            merged.push(left[i]);
            i++;
        }else{
            // if the element from j is smaller than i
            merged.push(right[j]);
            j++;
        }
    }

    // if there are remaining elements in left array 
    while(i < left.length){
        merged.push(left[i]);
        i++;
    }

    // if there are remaining elements in right array
    while(j < right.length){
        merged.push(right[j]);
        j++;
    }

    return merged;
}

// function to perform merge sort 
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    // devide the array into two halves
    const {left , right} = devideArr(arr);

    // recursively sort both halves 
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // merge the sorted halves
    return mergeArr(sortedLeft , sortedRight)
}

let arr = [10, 5 ,2 , 15 , 8];

console.log(`Sorted array: [${mergeSort(arr)}]`);