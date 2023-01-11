function merge(arr1, arr2) {
    let result = [];
    let pointA = 0;
    let pointB = 0;

    while(pointA < arr1.length && pointB < arr2.length)
    if(arr1[pointA] <= arr2[pointB]){
        result.push(arr1[pointA]);
        pointA++;
    } else {
        result.push(arr2[pointB]);
            pointB++;
    }

    while(pointA < arr1.length){
        result.push(arr1[pointA])
        pointA++
    }
    while(pointB < arr2.length){
        result.push(arr2.length);
        pointB++;
    }
    
    return result
}
    
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.splice(0, mid));
    let right = mergeSort(arr.splice(mid));

     return merge(left, right)
}

module.exports = { merge, mergeSort};