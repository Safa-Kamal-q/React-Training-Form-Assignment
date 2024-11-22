//Task 2
function sumAndAvgArrayCalculator(nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    const avg = total / nums.length;
    return { total, avg }
}

//Task 3
function duplicatesRemoval(arr) {
    return [...new Set(arr)];
  }