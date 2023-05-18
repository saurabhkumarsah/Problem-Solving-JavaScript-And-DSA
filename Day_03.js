// question 1. Move all zeroes to end of array
// question 2. Segregate even and odd numbers
// question 3. Find the largest three distinct elements in an array


// question 1. Move all zeroes to end of array
// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == 0){
//         arr.splice(i,1)
//         arr.push(0)
//     }
// }
// console.log("Updated array --> ",arr)



// question 2. Segregate even and odd numbers

// let arr = [1, 2, 3, 4, 5, 6, 7, 6, 8, 9, 10]
// let array = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         array.push(arr[i])
//     }
//     else {
//         array.unshift(arr[i])
//     }
// }
// console.log("Updated array --> ",array);


// question 3. Find the largest three distinct elements in an array
// let arr = [1, 2, 5, 26, 10, 24, 10, 234, 2]
// let array = []
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[i]) {
//             let temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }
// for (let k = 0; k < arr.length; k++) {
//     if (arr[k] != arr[k + 1] && arr[k + 1] != arr[k + 2]) {
//         array.push(arr[k], arr[k + 1], arr[k + 2])
//         break;
//     }
// }
// console.log("Updated array --> ",array);