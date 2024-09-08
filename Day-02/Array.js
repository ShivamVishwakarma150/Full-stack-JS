// Array Handbook

// Array methods: push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Push: adds an element to the end of the array
function pushExample(arr, element) {
    console.log("Original Array:", arr);
    arr.push(element); // add element to the end of the array
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// Pop: removes the last element from the array
function popExample(arr) {
    console.log("Original Array:", arr);
    arr.pop(); // remove the last element
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// Shift: removes the first element from the array
function shiftExample(arr) {
    console.log("Original Array:", arr);
    arr.shift(); // remove the first element
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// Unshift: adds an element to the beginning of the array
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element); // add element to the beginning of the array
    console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// Concat: merges two arrays into a new array
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
    let arr3 = arr1.concat(arr2); // merge two arrays into a new array
    console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// ForEach: executes a function for each element in the array
function forEachExample(arr) {
    console.log("Original Array:", arr);
    arr.forEach(function (item, index) {
        console.log(item, index); // execute a function for each element
    });
}
forEachExample([1, 2, 3]);

// Map: creates a new array with the results of applying a function to each element
function mapExample(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.map(function (item) {
        return item * 2; // apply a function to each element
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// Filter: creates a new array with all elements that pass a test
function filterExample(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.filter(function (item) {
        return item > 3; // test each element
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// Find: returns the first element that passes a test
function findExample(arr) {
    console.log("Original Array:", arr);
    let found = arr.find(function (item) {
        return item > 3; // test each element
    });
    console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// Sort: sorts the elements of the array in place
function sortExample(arr) {
    console.log("Original Array:", arr);
    arr.sort(function (a, b) {
        return a - b; // compare two elements
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);