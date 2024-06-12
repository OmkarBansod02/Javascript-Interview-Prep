Question : Implement a function that serialises a Javascript value into a JSON string.

# JSON Serialization in JavaScript

This README explains two methods of serializing JavaScript values into JSON strings:

1. Manually implementing the serialization process.
2. Using the built-in `JSON.stringify()` method.

## Method 1: Manual Implementation

### Overview

This method involves writing a custom function to serialize JavaScript values into JSON strings. This approach helps in understanding the underlying mechanics of JSON serialization.

### Explanation

1. **Basic Data Types**:
   - **Strings**: Strings are wrapped in double quotes, and necessary characters are escaped.
   - **Numbers**: Numbers are converted directly to their string representations.
   - **Booleans**: `true` becomes `"true"` and `false` becomes `"false"`.
   - **Null**: `null` is converted to `"null"`.

2. **Arrays**:
   - Each element of the array is recursively converted to a JSON string.
   - Elements are joined with commas and wrapped in square brackets.

3. **Objects**:
   - Each key-value pair is recursively converted to a JSON string in the format `"key":value`.
   - Pairs are joined with commas and wrapped in curly braces.
   - Keys are always strings and are wrapped in double quotes.

4. **Special Cases**:
   - Functions and `undefined` values are omitted in objects and arrays, as they are not valid in JSON.

### Implementation

The implementation involves checking the type of the value and converting it accordingly. Strings are escaped and wrapped in double quotes, numbers and booleans are converted to strings, arrays are recursively processed and wrapped in square brackets, and objects are recursively processed and wrapped in curly braces. Functions and `undefined` values are omitted.

## Method 2: Using `JSON.stringify()`

### Overview

The `JSON.stringify()` method is a built-in JavaScript function that converts values to a JSON string. It handles most of the serialization logic for you and is the recommended approach for JSON serialization in most cases.

### Explanation

1. **Basic Usage**:
   - Pass the value you want to serialize to `JSON.stringify()`.
   - It handles strings, numbers, booleans, null, arrays, and objects according to the JSON specification.

2. **Custom Options**:
   - **Replacer**: A function or an array to customize the serialization process.
   - **Space**: A string or number for indentation in the output JSON string, enhancing readability.

### Implementation

Using `JSON.stringify()` involves calling the function with the value to be serialized. Additional options like a replacer function or an array and a space parameter can be provided to customize the serialization process and format the output for readability.

### Usage Examples

- **Basic Example**: Pass an object, array, or other value to `JSON.stringify()` to obtain its JSON string representation.
- **Example with Pretty Printing**: Use the space parameter to format the output with indentation for better readability.

### Conclusion

- **Manual Implementation**: Provides a deeper understanding of the serialization process but is more complex and error-prone.
- **Using `JSON.stringify()`**: Easier and more reliable for most use cases, with options for customization and readability.

For most practical purposes, `JSON.stringify()` is the preferred approach, offering a simple and efficient way to serialize JavaScript values into JSON strings.
