/*
    Bubble Sort Algorithm in JavaScript
    We have an array of numbers
    To implement bubble sort , we will iterate through the array multiple times
    In each iteration , we will compare adjacent elements and swap them if they are in the wrong order 
*/


// function to perform bubble sort on an array
function bubbleSort(arr){
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let swapped = false;
        
        for(let j = 0 ; j < arr.length - i - 1 ; j++){

            // compare adjacent elements
            if(arr[j] > arr[j+1]){
                // swap if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        // if swapped is false , the array is already sorted
        if(!swapped) break;
    }   
}

let arr = [64, 34, 25, 12, 22, 11, 90];

bubbleSort(arr);

console.log(`Sorted array : ${arr}`);