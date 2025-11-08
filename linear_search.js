// function to calculate the sum of all elements in an array
function calcSum(arr){
    // variable to hold the sum 
    let sum = 0;

    // iterate through the array and add each element to sum
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }

    // return the final sum
    return sum;
}


// function to calculate avarage of all elements in an array
function calcAvg(arr){
    // get the sum from the array 
    let sum = calcSum(arr);
    // calculate the avarage 
    let avg = sum / arr.length;

    //return the avarage
    return avg;
}

// function for linear search 
function linearSearch(arr, key){
    // iterate through the array 
    for(let i = 0 ; i< arr.length ; i++){
        // check if the current element is equal to the key
        if(arr[i] === key){
            return i;
        }
    }
}


let arr = [10 , 5 ,2 , 15 , 34 , 16 , 1 , 0]

console.log(`Sum of all elements is : ${calcSum(arr)}`);
console.log(`Avarage of all elements is : ${calcAvg(arr)}`);
console.log(`Element found at index : ${linearSearch(arr , 16)}`);

