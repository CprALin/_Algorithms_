/* 
    Binary Search Algorithm in JavaScript
    We have a sorted array of numbers
    To implement binary search , we will repeatedly divide the search interval in half
    If the value of the search key is less than the item in the middle of the interval
    we narrow the interval to the lower half
    Otherwise , we narrow it to the upper half
    We repeat until the value is found or the interval is empty
*/

// function to perform binary search on a sorted array
function binarySearch(arr , target){
    //define left , right and mid indices
    let left = 0 , right = arr.length - 1 , mid;

    while(left <= right) {
        console.log(`Searching between indices ${left} and ${right}`);
        // calculate the middle index
        mid = left + ((right - left) >> 1);

        // check if the target is present at mid
        if(arr[mid] === target){
            console.log(`Element found at index ${mid}`);
            return mid;
        }

        // if target is greater than mid , ignore left half
        if(arr[mid] < target){
            console.log(`Element is greater than middle element ${arr[mid]}`);
            left = mid + 1;
        }

        // if target is smaller than mid , ignore right half
        else {
            console.log(`Element is smaller than middle element ${arr[mid]}`);
            right = mid - 1;
        }
    }

    return -1; // target not found
}

let arr = [2, 3, 4, 10, 40];
let target = 10;

let result = binarySearch(arr , target);

if(result !== -1){
    console.log(`Element found at index : ${result}`);
}else {
    console.log("Element not found in the array");
}