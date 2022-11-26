const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) { //function
  for (let key in object) { //scan object
    if (callback(object[key])) // if callback returns truthy
      return key;
  }
};                             ///else undefined

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");
 
