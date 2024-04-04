NeetCode's solution to this definitely saves on time complexity (O(n \* m)), but in TS/JS,
it is not as eloquently executed as in Python.

Even after understanding what he was trying to do, because Python dicts allow
the assigning of tuples as keys, he was able to very quickly implement his
solution.

Essentially, he utilizes the ASCII values of each character to create a unique
hash of each word that is an array. This unique hash is equivalent to a count of
each charcter.

By determining the difference of between each character's numeric ASCII value
(which will always be 1 through 26), we are able to populate a `count[]` array,
where the numeric count of how many times a character occurs is kept
always at the same spot in a 26 element array, initialized at 0.

This hash is calculated for every string, and to satisfy JavaScript's need for
string or number keys in Objects, we simply .join("") the count[] array's unique set of characters.
If the particular combination of characters has not been seen before, then the
res{} object is populated with a `res[hash]` key and assigned an empty array, `[]`.

Finally this array is populated with the string.

Once we have iterated over all of our initial `strs[]` array, we then simply
call `Object.values(res)` on our `res{}` object and return a matrix populated
with our anagrams grouped together.
