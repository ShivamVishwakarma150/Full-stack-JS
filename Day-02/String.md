# String Notes 

### 1. **Length**
The `length` property returns the number of characters in a string, including spaces.
```javascript
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
}
getLength("Hello World"); // Output: 11
```
- **Example**: `"Hello World"` has 11 characters, so `str.length` will return `11`.

### 2. **indexOf()**
The `indexOf()` method returns the index of the first occurrence of a substring within a string. If the substring is not found, it returns `-1`.
```javascript
function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World"); // Output: 6
```
- **Example**: In `"Hello World"`, the substring `"World"` starts at index `6`.

### 3. **lastIndexOf()**
The `lastIndexOf()` method returns the index of the last occurrence of a substring within a string. It searches from the end of the string.
```javascript
function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World"); // Output: 12
```
- **Example**: In `"Hello World World"`, the last occurrence of `"World"` is at index `12`.

### 4. **slice()**
The `slice()` method extracts a section of a string and returns it as a new string without modifying the original string. It takes two arguments: the start index (inclusive) and the end index (exclusive).
```javascript
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5); // Output: "Hello"
```
- **Example**: `slice(0, 5)` extracts characters from index `0` to `4`, returning `"Hello"`.

### 5. **substring()**
The `substring()` method is similar to `slice()` but does not accept negative indices. It also extracts a part of the string based on the start and end indices.
```javascript
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5); // Output: "Hello"
```
- **Example**: The result is the same as `slice()` for positive indices.

### 6. **replace()**
The `replace()` method replaces the first occurrence of a substring with another substring. It does not modify the original string but returns a new one.
```javascript
function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript"); // Output: "Hello JavaScript"
```
- **Example**: Replaces `"World"` with `"JavaScript"`, so the result is `"Hello JavaScript"`.

### 7. **split()**
The `split()` method splits a string into an array of substrings based on a specified separator.
```javascript
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World", " "); // Output: ["Hello", "World"]
```
- **Example**: Splits the string by spaces, resulting in an array `["Hello", "World"]`.

### 8. **trim()**
The `trim()` method removes whitespace from both ends of a string. It doesn’t affect the spaces inside the string.
```javascript
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
}
trimString(" Hello World "); // Output: "Hello World"
```
- **Example**: Removes leading and trailing spaces, resulting in `"Hello World"`.

### 9. **toUpperCase()**
The `toUpperCase()` method converts all characters in a string to uppercase.
```javascript
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World"); // Output: "HELLO WORLD"
```
- **Example**: `"Hello World"` becomes `"HELLO WORLD"`.

### 10. **toLowerCase()**
The `toLowerCase()` method converts all characters in a string to lowercase.
```javascript
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World"); // Output: "hello world"
```
- **Example**: `"Hello World"` becomes `"hello world"`.

---

### Key Differences and Notes:
- **`slice()` vs `substring()`**: Both extract a part of the string, but `slice()` can accept negative indices (counts from the end), while `substring()` cannot.
- **`replace()`**: By default, only replaces the first match. To replace all occurrences, you need to use a regular expression with the global flag (e.g., `/World/g`).
- **`split()`**: You can split a string based on any character or sequence of characters. For example, using an empty string `split("")` splits the string into individual characters.

These string methods are essential for manipulating and transforming text data in JavaScript.