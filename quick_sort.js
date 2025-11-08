// function to perform quick sort on an array
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    // set initial pivot as the middle element
    let pivot = arr[arr.length / 2 | 0];

    //left array 
    let left = [];
    let index_left = 0;
    //right array
    let right = [];
    let index_right = 0;

    // iterate through the array and compare each element with the pivot
    for(let i = 0 ; i < arr.length ; i++){
        // skip the pivot element
        if(arr[i] === pivot) continue;
        // if the element is less than pivot , push it to left array
        if(arr[i] < pivot){
            left[index_left] = arr[i];
            index_left++;
        }
        // if the element is greater than pivot , push it to right array
        else {
            right[index_right] = arr[i];
            index_right++;
        }
    }

    // return the array with left , pivot and right recursively sorted
    return [...quickSort(left) , pivot , ...quickSort(right)];

}


let arr = [10 , 5 ,2 , 15 , 34 , 16 , 1 , 0 , 8 , 6 , 3 , 3 ,  6]

console.log(quickSort(arr));