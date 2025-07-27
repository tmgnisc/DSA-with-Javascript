//Ques 4 - Two sum
// Given an array of integeres nums and an integer target, 
//return indices of the two numbers such that they add up to target

//Input: nums = [2,7,11,15], target = 9
//output: [0,9] (Because nums[0] + nums[1] == 9, we return [0,1])
//Input : nums = [3,2,4], target = 6
//output:[1,2]


//first solution
const twoSum = function(nums, target){
    for(let i = 0; i< nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,7,11,15], 9))