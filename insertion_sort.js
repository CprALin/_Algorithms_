/* 
    Perform insertion sort on an array of numbers .

    Insertion sort is a simple sorting algorithm that works by iterativly inserting
    each element of an unsorted list into its correct position in a sortet portion of the list.

    * We start with the second element of the array (the first one is considered sorted)
    * Compare the second element with the first one if the second element is smaller than swap them
    * Move to the third element , compare it with the first two elements , and put it in its correct position
    * Repeat until entire array is sorted 
*/


// function to perform insertion sort
function insertionSort(arr){
   for(let i = 1 ; i < arr.length ; i++)
   {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key)
        {
            arr[j+1] = arr[j];
            j--; 
        }

        arr[j+1] = key;
   }

   return arr
}

let arr = [12,11,8 , 10 , 9, 5 , 6]

console.log(`Sorted array : ${insertionSort(arr)}`);
