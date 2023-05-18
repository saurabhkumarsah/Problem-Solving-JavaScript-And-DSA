/**
 * Home assignment
 * 1. find the maximum element in an array
 * 2. find the minimum element in an array
 * 3. find the second largest element in an array
 * 4. find the second smallest element in an array
 * 5. find the sum of all elements in an array
 * 6. find the average of all elements in an array
 * 7. find the sum of all even elements in an array
 * 8. find the sum of all odd elements in an array
 * 9. find the number of even elements in an array
 * 10. find the number of odd elements in an array
 */

// 1. find the maximum element in an array
// let arr = [1,2,5,26,7,24,7,234,2]
// let max = 0
// for(let i=0; i<arr.length; i++ ) {
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log("Maximum element of array: ",max);



// 2. find the minimum element in an array
// let arr = [54,87,85,95,7,57,5,75,2,2]
// let min = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log("Minimum element of array: ",min)


// 3. find the second largest element in an array
// let arr = [54, 50, 85, 95, 7, 57, 5, 75, 2]
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {
//             let temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }
// console.log("Sorted array in accending order",arr);
// let secondLargestElement = 0
// for (let k = arr.length - 1; k >= 0; k--) {
//     if (arr[k] != arr[k - 1]) {
//         secondLargestElement = arr[k - 1]
//         break;
//     }
// }
// console.log("Second largest element of array: ",secondLargestElement)


// 4. find the second smallest element in an array
// let arr = [54,87,85,95,7,57,5,75,2]
// for(let i=0; i<arr.length-1; i++) {
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]<arr[i]){
//             let temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }
// let secondSmallestElement = 0
// console.log("sorted array: ",arr);
// for(let k=0; k < arr.length; k++){
//     if(arr[k] != arr[k+1]){
//         secondSmallestElement = arr[k+1]
//         break;
//     }
// }
// console.log(secondSmallestElement)



// 5. find the sum of all elements in an array
// let arr = [1,2,5]
// let res = 0
// for(let i=0; i<arr.length; i++){
//     res += arr[i]
// }
// console.log(res)



// 6. find the average of all elements in an arry
// let arr = [1,2,5,26,7,24,7,234,2]
// let res = 0
// for(let i=0; i<arr.length; i++){
//     res += arr[i]
// }
// console.log("Average of all element: ", res/arr.length)




// 7. find the sum of all even elements in an arry
// let arr = [1, 2, 5, 4]
// let res = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         res += arr[i]
//     }
// }
// console.log("Sum of all even number: ", res);



// 8. find the sum of all odd elements in an arry
// let arr = [1, 2, 5, 7]
// let res = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         res += arr[i]
//     }
// }
// console.log("Sum of all odd number: ", res);


// 9. find the number of even elements in an arry
// let arr = [1, 2, 5, 26, 9, 24, 9, 234, 2]
// let res = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         res.push(arr[i])
//     }
// }
// console.log("Array of all even number: ", res);


// 10. find the number of odd elements in an array
let arr = [1, 2, 5, 26, 10, 24, 10, 234, 2]
let res = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        res.push(arr[i])
    }
}
console.log("Array of all odd number: ", res);
