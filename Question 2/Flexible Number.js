function curriedConcat(...args1) {
    function concatHelper(...args2) {
        if (args2.length === 0) {
            return args1.join('');
        } else {
            return curriedConcat(...args1, ...args2);
        }
    }
    return concatHelper;
}
console.log(curriedConcat('Hello, ')('world')('!')()); // Output: "Hello, world!"
