/**
 * Function to find the closest match to a string (needle) in a list of strings (haystack).
 *
 * This function calculates a score for each string in the haystack, according to how closely
 * it matches the needle. The match does not have to be exact and can have additional characters.
 * The string with the highest score is returned as the best match.
 *
 * @param haystack The list of strings to search through. Must be a string array otherwise null is returned.
 * @param needle The string to find a match for. Must be a string otherwise null is returned.
 * @param caseSensitive (optional) Whether or not the search should be case sensitive. Defaults to false.
 * @param exhaustive (optional) Whether or not the search should exhaustively calculate score for each string. It improves accuracy but reduces performance *slightly*. Defaults to true.
 *
 * ```
 * fuzzy: 3615.18994140625 ms
 * fuzzy exhaustive: 4576.52880859375 ms
 * ```
 *
 * @returns The best match from the haystack or null if inputs are invalid.
 */ 
function fuzzyStringSearch(haystack: string[], needle: string, caseSensitive=false, exhaustive=true): string | null {
  // Verification of input types
  if (typeof needle !== "string" || !Array.isArray(haystack) || !haystack.every(e => typeof e === "string")) {
    return null;
  }

  /** 
   * Function to calculate a fuzzy score for given strings.
   * Score increases with exact character matches and decreases with mismatches. Higher score is better.
   * @returns the fuzzy similarity score between two strings.
   */ 
  const fuzzyScore = (hay: string, needle: string): number => {
    let window: string, score = 0, step = needle.length, min = 0;

    if (hay === needle) {
      return 10e6;
    } 

    if (!exhaustive) {
      min = Math.floor(step/2)
    }

   
    // Iterate over the needle string, reducing its size with every iteration
    for (;step > min; step--) {
      for (let i = 0, n = -1; window = needle.slice(i, step); i++) {
        const old_n = n
        n = hay.indexOf(window, n + 1);
        // Score is increased by step if match is found, decreased by 1 if not
        if (n >= 0) {
          // the difference between the expected location and real location that 
          // decreases based on how far from the start of the hay string it is.
          score += (old_n-n)/(i+1) 
        } else {
          // it's better if we find what we're looking for at an earlier step so the score
          // decreases more when we don't find something in the beginning steps (step starts at length of needle string)
          score -= step
        }
        if (score > 0) {
          return score
        }
      }
    }

    return score;
  }

  // 'scores' object stores each hay item along with their fuzzyScore.
  // Converting hay and needle to lowercase if caseSensitive is false.
  const scores = haystack.reduce<Record<string, number>>((acc, hay) => {
    let processedHay = caseSensitive ? hay : hay.toLowerCase();
    let processedNeedle = caseSensitive ? needle : needle.toLowerCase();

    acc[hay] = fuzzyScore(processedHay, processedNeedle);
    
    return acc;
  }, {});

  //console.log(scores)

  const bestMatch = haystack.reduce((prev, curr) => {
    let _prev = caseSensitive ? prev : prev.toLowerCase();
    let _curr = caseSensitive ? curr : curr.toLowerCase();

    // Choose the string with the highest score. In case of tie, choose the shorter string
    if (scores[prev] > scores[curr] || ( scores[prev] > scores[curr] && _prev.length <= _curr.length)) {
      return prev;
    } 
    return curr;
  });

  return bestMatch;
}
