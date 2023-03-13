// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let filArr = arr.filter(Boolean);
    return filArr;
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]