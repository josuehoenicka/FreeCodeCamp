// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array

function chunkArrayInGroups(arr, size) {
    let arrEmpty = [];
    for(let i = 0; i < arr.length; i+= size){
      arrEmpty.push(arr.slice(i, i + size));
    }
    return arrEmpty;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]