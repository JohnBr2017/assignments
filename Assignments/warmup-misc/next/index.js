var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j]
            } else {
                if (nums[i] == target - nums[j])
                    return [i, j]
            }
        }
    }
};
console.log(twoSum(nums, 26));