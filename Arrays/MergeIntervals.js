function mergeIntervals(intervals) {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  var prev = intervals.shift();
  var res = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }

  return res;
}
