# typescript-fuzzy-search
A simple typescript function I spent way too much time on

# Tests/examples

```typescript
let res: string | null = ""

const allLanguages = ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
 "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
 "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
 "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
 "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
 "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
 "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
 "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
 "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
 "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
 "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
 "ji", "zu", "sv"];


const test = (fuzzyStringSearch: Function) => {
// Basic functionality
let testCase1 = ["apple", "banana", "orange", "pineapple"];
res = fuzzyStringSearch(testCase1, "apple");
console.assert(res === "apple", res); // Expected: true

// Order of letters doesn't matter
let testCase2 = ["sv", "sx", "sv-FI", "es-SV"];
res = fuzzyStringSearch(testCase2, "sv-SE");
console.assert(res === "sv-FI", res, "=== sv-FI"); // Expected: true

// Non-case sensitive match
let testCase3 = ["Dog", "Cat", "Bird", "Fish"];
res = fuzzyStringSearch(testCase3, "dog");
console.assert(res === "Dog", res); // Expected: true

// Exhaustive search - More accurate match even with additional letters
let testCase_5 = ["ABCD", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase_5, "AB");
console.assert(res === "ABCD", res, " === ABCD"); // Expected: true

//  Prioritize better and shorter strings
let testCase6 = ["ABCD", "B", "AB", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase6, "AB");
console.assert(res === "AB", res, "=== AB"); // Expected: true

// Invalid inputs - haystack is not an array
res = fuzzyStringSearch("hello", "h");
console.assert(res === null, res, " === null"); // Expected: true

// Invalid inputs - needle is not a string
res = fuzzyStringSearch(["h"], true);
console.assert(res === null, res, ); // Expected: true

// Basic functionality with long sentences
let testCase7 = ["I love to watch movies.", "I enjoy playing football.", "Cooking is my favorite pastime.", "I like to read books."];
res = fuzzyStringSearch(testCase7, "I love reading books.");
console.assert(res === "I like to read books.", res, "I like to read books."); // Expected: true

// Case-insensitive match in sentences
let testCase8 = ["Don't cry because it's over, smile because it happened.", "In three words I can sum up everything I've learned about life: it goes on."];
res = fuzzyStringSearch(testCase8, "don't CRY because it's OVER, SMILE because it happened.");
console.assert(res === "Don't cry because it's over, smile because it happened.", res); // Expected: true

// Test with special characters in the haystack and needle
let testCase9 = ["return -2*root;", "console.log(delta)", "function solve(){ }", "{ key: value }"]
res = fuzzyStringSearch(testCase9, "return (delta >= 0) ? -2*root : console.log(delta);");
console.assert(res === "console.log(delta)", "console.log(delta) ===", res); // Expected: true

// Test with more than one possible matches, with and without exhaustive search
let testCase10 = [
  "A If you don't know where you're going, any road'll take you there", 
  "B If you don't know where you want to go, then it doesn't matter which path you take."];
res = fuzzyStringSearch(testCase10, "If you don't know where you're going, any road will get you there.");
console.assert(res === "A If you don't know where you're going, any road'll take you there"); // Expected: true

res = fuzzyStringSearch(testCase10, "then it doesn't matter.");
console.assert(res === "B If you don't know where you want to go, then it doesn't matter which path you take."); // Expected: true
}


console.time("fuzzy");
for (var i = 0; i < 10e2; i++) {
  // Note that this one will make one assert false because it's not exhaustive
  test((haystack: string[], needle: string) => fuzzyStringSearch(haystack, needle))
}
console.timeEnd("fuzzy");


console.time("fuzzy exhaustive");
```
for (var i = 0; i < 10e2; i++) {
  test((haystack: string[], needle: string) => fuzzyStringSearch(haystack, needle, false, true))
}
console.timeEnd("fuzzy exhaustive");
