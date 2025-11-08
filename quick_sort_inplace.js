// function to perform swiching of two elements in an array
function swap(arr, i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// function to perform partitioning of the array
function partition(arr , low , high){
    // set the pivot as the last element
    let pivot = arr[high];

    // set the index of smaller element
    let i = low - 1;

    // loop through all elements
    for(let j = low ; j < high ; j++){
        // if the current element is smaller than or equal to pivot
        if(arr[j] <= pivot){
            // increment the index of smaller element
            i++;
            // swap the elements at i and j
            swap(arr , i , j);
        }
    }

    // swap the pivot element with the element at i + 1
    swap(arr , i + 1 , high);
    // return the index of the pivot element after partition
    return i + 1;
}

// function to perform quick sort in place 
function quickSort(arr , low , high){
    if(low < high){
        // find the position of pivot element 
        let pi = partition(arr , low , high);

        // recursively sort elements before and after partition
        quickSort(arr , low , pi - 1);
        quickSort(arr , pi + 1 , high);
    }
}

let arr = [10, 5 ,2 , 15 , 34 , 16 , 1 , 0 , 8 , 6 , 3 , 3 ,  6];
quickSort(arr , 0 , arr.length - 1);
console.log(`Sorted array: [${arr}]`);