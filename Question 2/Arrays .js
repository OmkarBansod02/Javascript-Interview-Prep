function curriedMerge(...args1) {
    function mergeHelper(...args2) {
        if (args2.length === 0) {
            return Object.assign({}, ...args1);
        } else {
            return curriedMerge(...args1, ...args2);
        }
    }
    return mergeHelper;
}
console.log(curriedMerge({a: 1})({b: 2})({c: 3})()); // Output: {a: 1, b: 2, c: 3}
