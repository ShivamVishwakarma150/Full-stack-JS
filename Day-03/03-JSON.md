## **Introduction to JSON in JavaScript**

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for both humans and machines to read and write. It's commonly used for sending and receiving structured data in web applications, especially in APIs.

- **JSON String**: A JSON string is a string that represents data in a structured format. It's always enclosed in double quotes.
- **JavaScript Object**: JavaScript objects are similar to JSON, but in JavaScript, keys can be unquoted, and functions or undefined values are allowed (which JSON doesn't support).

JavaScript provides two key methods for working with JSON:
1. **`JSON.parse()`**: Converts a JSON string into a JavaScript object.
2. **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.

### **Explanation of the `jsonMethods` Function**

The `jsonMethods` function demonstrates how to work with JSON strings and JavaScript objects using `JSON.parse()` and `JSON.stringify()`.

#### 1. **Printing the Original JSON String**
```javascript
console.log("Original JSON String:", jsonString);
```
- This logs the raw JSON string passed as an argument.
  
#### 2. **Parsing JSON String to JavaScript Object**
```javascript
let parsedObject = JSON.parse(jsonString);
console.log("After JSON.parse():", parsedObject);
```
- **`JSON.parse()`**: This method takes a JSON string and converts it into a JavaScript object. This is useful when you receive JSON data from an external source (e.g., from an API or local storage) and need to manipulate it as an object in JavaScript.
  
  Example:
  ```json
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}'
  ```
  After parsing, this will become:
  ```javascript
  {
    key: "value",
    number: 42,
    nested: {
      nestedKey: "nestedValue"
    }
  }
  ```

#### 3. **Stringifying JavaScript Object to JSON String**
```javascript
let jsonStringified = JSON.stringify(parsedObject);
console.log("After JSON.stringify():", jsonStringified);
```
- **`JSON.stringify()`**: This method takes a JavaScript object and converts it back into a JSON string. This is useful when you want to send data (as JSON) to an API or store it in a format that can be easily transferred or stored.

  Example:
  ```javascript
  {
    key: "value",
    number: 42,
    nested: {
      nestedKey: "nestedValue"
    }
  }
  ```
  After stringifying, this will become:
  ```json
  '{"key":"value","number":42,"nested":{"nestedKey":"nestedValue"}}'
  ```

#### 4. **Example Usage**
```javascript
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
```
- Here, we pass a valid JSON string to the `jsonMethods()` function, demonstrating how JSON data can be converted into a JavaScript object and then back into a JSON string.

### **Notes on JSON Methods**

1. **`JSON.parse()`**:
   - Used to safely convert a JSON string into a usable JavaScript object.
   - If the string is not valid JSON, `JSON.parse()` will throw an error.
   
   Example:
   ```javascript
   const jsonString = '{"name": "John", "age": 30}';
   const parsed = JSON.parse(jsonString);
   console.log(parsed.name); // Output: John
   ```

2. **`JSON.stringify()`**:
   - Converts a JavaScript object or array into a JSON string.
   - This is useful for serializing data to be stored or transmitted.
   - Optionally, it can accept a replacer function or array to filter properties, and a space argument to control indentation for readability.
   
   Example:
   ```javascript
   const obj = { name: "John", age: 30 };
   const jsonString = JSON.stringify(obj);
   console.log(jsonString); // Output: {"name":"John","age":30}
   ```

3. **Handling Nested Objects**:
   - Both `JSON.parse()` and `JSON.stringify()` work recursively. This means that nested objects, arrays, and their contents will be parsed or stringified as well.

   Example:
   ```javascript
   const nestedObj = { outer: { inner: { key: "value" } } };
   const jsonString = JSON.stringify(nestedObj);
   console.log(jsonString); // Output: {"outer":{"inner":{"key":"value"}}}
   ```

4. **Error Handling for `JSON.parse()`**:
   - It's a good idea to wrap `JSON.parse()` inside a `try-catch` block to handle potential errors (e.g., if the string is malformed or not valid JSON).
   
   Example:
   ```javascript
   try {
     const invalidJSONString = "{name: 'John'}"; // Missing double quotes
     JSON.parse(invalidJSONString);
   } catch (e) {
     console.error("Error parsing JSON:", e.message);
   }
   ```

### **Summary**
- **`JSON.parse()`**: Converts a JSON string into a JavaScript object.
- **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.
- JSON is essential for working with structured data in JavaScript, especially when exchanging data between client and server in web applications.
