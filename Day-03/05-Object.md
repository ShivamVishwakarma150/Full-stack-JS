## **Introduction to JavaScript Object Methods**

JavaScript objects are collections of key-value pairs where the keys are strings (or symbols), and the values can be any data type. JavaScript provides various built-in methods to manipulate and interact with objects, allowing developers to easily access, update, and extend object properties.

The `objectMethods` function demonstrates some common methods that can be used to work with objects, such as retrieving keys, values, and entries, checking for the existence of a property, and copying or merging objects.

### **Explanation of the `objectMethods` Function**

The `objectMethods` function explores the following methods:

#### 1. **Printing the Original Object**
```javascript
console.log("Original Object:", obj);
```
- This logs the object passed to the function, displaying its key-value pairs.

#### 2. **Retrieving Object Keys (`Object.keys()`)**
```javascript
let keys = Object.keys(obj);
console.log("After Object.keys():", keys);
```
- **`Object.keys()`**: This method returns an array of the object's own property keys (the names of the object's properties).
  - It does not include inherited properties.
  
  Example:
  - For `{ key1: "value1", key2: "value2" }`, `Object.keys()` will return `["key1", "key2"]`.

#### 3. **Retrieving Object Values (`Object.values()`)**
```javascript
let values = Object.values(obj);
console.log("After Object.values():", values);
```
- **`Object.values()`**: This method returns an array of the object's own property values.
  
  Example:
  - For `{ key1: "value1", key2: "value2" }`, `Object.values()` will return `["value1", "value2"]`.

#### 4. **Retrieving Object Entries (`Object.entries()`)**
```javascript
let entries = Object.entries(obj);
console.log("After Object.entries():", entries);
```
- **`Object.entries()`**: This method returns an array of key-value pairs in the form of arrays. Each key-value pair becomes a two-element array.
  
  Example:
  - For `{ key1: "value1", key2: "value2" }`, `Object.entries()` will return `[["key1", "value1"], ["key2", "value2"]]`.

#### 5. **Checking if a Property Exists (`hasOwnProperty()`)**
```javascript
let hasProp = obj.hasOwnProperty("property");
console.log("After hasOwnProperty():", hasProp);
```
- **`hasOwnProperty()`**: This method checks if the object has the specified property as its own (not inherited) property. It returns `true` or `false`.
  
  Example:
  - For `{ key1: "value1" }`, `obj.hasOwnProperty("key1")` returns `true`.
  - If you check for `"property"` that does not exist, it returns `false`.

#### 6. **Copying or Merging Objects (`Object.assign()`)**
```javascript
let newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log("After Object.assign():", newObj);
```
- **`Object.assign()`**: This method copies the properties from one or more source objects into a target object. It creates a shallow copy of the original object and adds any new properties.
  - This is useful for merging objects or adding properties to a new object.
  
  Example:
  - For `{ key1: "value1" }` and `{ newProperty: "newValue" }`, `Object.assign({}, obj, { newProperty: "newValue" })` will return:
    ```javascript
    {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      newProperty: "newValue"
    }
    ```

### **Example Usage of the `objectMethods` Function**

Here’s how the `objectMethods` function is used:
```javascript
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
```
This function logs the following output for the given `sampleObject`:
- Original Object: `{ key1: "value1", key2: "value2", key3: "value3" }`
- `Object.keys(sampleObject)`: `["key1", "key2", "key3"]`
- `Object.values(sampleObject)`: `["value1", "value2", "value3"]`
- `Object.entries(sampleObject)`: `[["key1", "value1"], ["key2", "value2"], ["key3", "value3"]]`
- `obj.hasOwnProperty("property")`: `false` (since `"property"` does not exist in the object)
- After `Object.assign()`: 
  ```javascript
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    newProperty: "newValue"
  }
  ```

### **Summary of Key Object Methods**

1. **`Object.keys()`**: Returns an array of the object's property keys.
2. **`Object.values()`**: Returns an array of the object's property values.
3. **`Object.entries()`**: Returns an array of key-value pairs.
4. **`hasOwnProperty()`**: Checks whether a specific property exists in the object.
5. **`Object.assign()`**: Copies properties from source objects into a target object (useful for cloning or merging objects).

### **Conclusion**

JavaScript object methods provide powerful ways to access and manipulate object properties. The `objectMethods` function demonstrates how to extract keys, values, and entries from an object, check for the existence of properties, and merge or clone objects using `Object.assign()`. These methods are essential for working efficiently with objects in JavaScript applications.