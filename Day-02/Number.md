# parseInt() , parseFloat()
---

### **1. `parseInt()`**

The `parseInt()` function parses a string and returns an integer. It stops parsing when it encounters a character that is not a valid digit. If the first character cannot be converted to a number, it returns `NaN` (Not a Number).

```javascript
function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");     // Output: 42
explainParseInt("42px");   // Output: 42
explainParseInt("3.14");   // Output: 3
```

**Explanation**:
- **`parseInt("42")`**: Converts the string `"42"` to the integer `42`.
- **`parseInt("42px")`**: Starts at `"42"` and stops when it encounters `"p"`, returning `42`.
- **`parseInt("3.14")`**: Parses the string `"3.14"` and stops at the decimal point, returning `3` (since it's an integer function).

---

### **2. `parseFloat()`**

The `parseFloat()` function parses a string and returns a floating-point number. Similar to `parseInt()`, it stops parsing when it encounters a character that is not part of the number. Unlike `parseInt()`, `parseFloat()` can handle decimal points.

```javascript
function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");  // Output: 3.14
explainParseFloat("42");    // Output: 42
explainParseFloat("42px");  // Output: 42
```

**Explanation**:
- **`parseFloat("3.14")`**: Converts the string `"3.14"` to the floating-point number `3.14`.
- **`parseFloat("42")`**: Converts the string `"42"` to the number `42`. Since there’s no decimal point, it behaves similarly to `parseInt()` in this case.
- **`parseFloat("42px")`**: Similar to `parseInt()`, it stops at `"p"` and returns `42`, but `parseFloat()` will include decimals if present.

---

### Key Points:
- **`parseInt()`** is used for converting strings to integers, ignoring decimals and stopping at non-digit characters.
- **`parseFloat()`** is used for converting strings to floating-point numbers, allowing decimals but also stopping at non-numeric characters.
- If the string starts with non-numeric characters, both functions return `NaN`.

---

These functions are helpful when you need to extract numerical values from strings that may include other characters (e.g., `"42px"`, `"3.14 degrees"`, etc.).