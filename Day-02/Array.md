# Arrays in JS
---

### **1. `push()`**
Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
function pushExample(arr, element) {
    console.log("Original Array:", arr);
    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4); // Output: [1, 2, 3, 4]
```
- **Example**: `[1, 2, 3]` becomes `[1, 2, 3, 4]` after pushing `4`.

---

### **2. `pop()`**
Removes the last element from an array and returns that element.
```javascript
function popExample(arr) {
    console.log("Original Array:", arr);
    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]); // Output: [1, 2]
```
- **Example**: `[1, 2, 3]` becomes `[1, 2]` after popping the last element (`3`).

---

### **3. `shift()`**
Removes the first element from an array and returns that element.
```javascript
function shiftExample(arr) {
    console.log("Original Array:", arr);
    arr.shift();
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]); // Output: [2, 3]
```
- **Example**: `[1, 2, 3]` becomes `[2, 3]` after shifting (removing `1`).

---

### **4. `unshift()`**
Adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0); // Output: [0, 1, 2, 3]
```
- **Example**: `[1, 2, 3]` becomes `[0, 1, 2, 3]` after unshifting `0`.

---

### **5. `concat()`**
Merges two or more arrays and returns a new array. The original arrays are not modified.
```javascript
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]); // Output: [1, 2, 3, 4, 5, 6]
```
- **Example**: Merges `[1, 2, 3]` and `[4, 5, 6]` into `[1, 2, 3, 4, 5, 6]`.

---

### **6. `forEach()`**
Executes a provided function once for each array element. It doesn’t return a new array.
```javascript
function forEachExample(arr) {
    console.log("Original Array:", arr);
    arr.forEach(function (item, index) {
        console.log(item, index);
    });
}
forEachExample([1, 2, 3]); // Output: 1 0, 2 1, 3 2
```
- **Example**: Loops through each item in `[1, 2, 3]` and logs both the item and its index.

---

### **7. `map()`**
Creates a new array with the results of calling a function on every element in the original array.
```javascript
function mapExample(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.map(function (item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]); // Output: [2, 4, 6]
```
- **Example**: Multiplies each element in `[1, 2, 3]` by 2, returning `[2, 4, 6]`.

---

### **8. `filter()`**
Creates a new array with all elements that pass the test implemented by the provided function.
```javascript
function filterExample(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.filter(function (item) {
        return item > 3;
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]); // Output: [4, 5]
```
- **Example**: Filters out all elements less than or equal to `3`, returning `[4, 5]`.

---

### **9. `find()`**
Returns the value of the first element in the array that satisfies the provided testing function. If no value satisfies the function, it returns `undefined`.
```javascript
function findExample(arr) {
    console.log("Original Array:", arr);
    let found = arr.find(function (item) {
        return item > 3;
    });
    console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]); // Output: 4
```
- **Example**: Finds the first element greater than `3`, which is `4`.

---

### **10. `sort()`**
Sorts the elements of an array in place and returns the sorted array. By default, `sort()` converts the elements to strings and sorts them lexicographically, but you can pass a compare function to change the behavior.
```javascript
function sortExample(arr) {
    console.log("Original Array:", arr);
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]); // Output: [1, 2, 3, 4, 5]
```
- **Example**: Sorts the array numerically from smallest to largest.

---

### Key Points:
- **Mutating vs Non-mutating**: Some methods modify the original array (e.g., `push()`, `pop()`, `shift()`, `unshift()`, `sort()`), while others return a new array without modifying the original (e.g., `concat()`, `map()`, `filter()`).
- **Iteration**: Methods like `forEach()`, `map()`, `filter()`, and `find()` allow you to iterate through arrays, applying a function to each element.

These methods provide a wide range of tools for managing and transforming arrays in JavaScript.