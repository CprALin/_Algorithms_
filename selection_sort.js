/* Selection Sort Algorithm Implementation in JavaScript
   We have an array of numbers 
   To implement selection sort , we will iterate through the array
   and we need to find the smallest element in the unsorted part of the array 
   swap the smallest element with the firts element of the unsorted part 
*/


// find the minimum element in the array from an index to the end
function findMinIndex(arr , startIndex){
    let minIndex = startIndex;

    for(let i = startIndex + 1 ; i < arr.length ; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
    }

    return minIndex;
} 


// function to swap two elements in the array
function swap(arr , index1 , index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// function to perform selection sort on an array
function selectionSort(arr){
    let currentIndex = 0;

    for(let i = 0 ; i < arr.length - 1 ; i++){
        // find the index of the minimum element in the unsorted part
        let minIndex = findMinIndex(arr , currentIndex);

        // swap the minimum element with the first element of the unsorted part 
        swap(arr , currentIndex , minIndex);

        // move to the next index
        currentIndex++;
    }

    return arr;
}

let arr = [64, 25, 12, 22, 11];

console.log(`Sorted array : ${selectionSort(arr)}`);