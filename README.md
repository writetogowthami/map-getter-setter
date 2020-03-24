# Using Maps setting, getting, deleting and manipulating key, values with below results

const cache = new OurCache(3);

cache.put("a", 1); // a
console.log(cache);

cache.put("b", 2); // a, b
console.log(cache);

cache.put("c", 3); // a, b, c
console.log(cache);

console.log(cache.get("a"));    // returns 3 and moves priority of “a” // b,c,a

cache.put("d", 4)  // evicts “b” key // b,c,a,d
console.log(cache);

console.log(cache.get("b"))   // returns null
