function curriedMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
console.log(curriedMultiply(2)(3)(4)); // Output: 24
