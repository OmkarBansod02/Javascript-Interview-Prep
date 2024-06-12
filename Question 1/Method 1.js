
// Method 1: Manual Implementation

function jsonStringify(value) {
    // Handle string values
    if (typeof value === 'string') {
        return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }

    // Handle number values
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }

    // Handle null
    if (value === null) {
        return 'null';
    }

    // Handle arrays
    if (Array.isArray(value)) {
        const elements = value.map(jsonStringify).join(',');
        return `[${elements}]`;
    }

    // Handle objects
    if (typeof value === 'object') {
        const entries = Object.entries(value).reduce((acc, [key, val]) => {
            if (typeof val !== 'function' && typeof val !== 'undefined') {
                acc.push(`${jsonStringify(key)}:${jsonStringify(val)}`);
            }
            return acc;
        }, []).join(',');
        return `{${entries}}`;
    }

    // Handle other types (function and undefined)
    return undefined;
}

// Testing the function
const testObj = {
    name: "Omkar",
    age: 24,
    isAdmin: false,
    courses: ["HTML", "CSS", "JS"],
    wife: null
};

console.log(jsonStringify(testObj));
