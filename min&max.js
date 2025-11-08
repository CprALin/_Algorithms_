
// Create a function to detect max from an arr 
function detectMax(arr) {
    // max variable 
    // Set the first value to a 'max' variable 
    let max = arr[0];

    // To detect max value we need to go throw array 
    for(let i = 0 ; i < arr.length ; i++) {

        // If the max value is lower then the next one , set the current value as max
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }

    // after interetion , return max 
    return max;

}


// Create a function to detect min from an array 
function detectMin(arr) {
    // Set the first value to a 'min' variable 
    let min = arr[0];
    
    for(let i = 0 ; i < arr.length ; i++){
        
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }

    return min
}


let arr = [10 , 5 ,2 , 15 , 34 , 16 , 1 , 0]

let max = detectMax(arr);
let min = detectMin(arr);

console.log(`Max value is : ${max} . \n Min value is : ${min} .` )