/*
There is a collection of input strings and a collection of query strings.
For each query string, determine how many times it occurs in the list of input strings.
Return an array of the results.

Example:
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

result = [2, 1, 0]
 */

export function matchingStrings (strings, queries) {
  // Write your code here
  const stringsFrequency = {}
  for (const string of strings) {
    stringsFrequency[string] = ++stringsFrequency[string] || 1
  }

  return queries.map(query => stringsFrequency[query] || 0)
}
