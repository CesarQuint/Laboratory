let nums =[1,2,-3,4,2,-1,]

//!Repasar este codigo

var productExceptSelf = function(nums) {
    console.log(nums);
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    console.log(output);
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};


const conseq = [20,100,10,12,5,13]

//!Esto funciona solo si son consecutivos
const findcons= nums =>{

    let staus = false
    for (let index = 0; index < nums.length; index++) {
       if(nums[index]<nums[index+1] && nums[index+1]<nums[index+2])
        return staus = true
    }
    return staus
}

//*este codigo de leetcode Identifica con alamacenamiento de menor y mayor
//TODO:Leer este codigo y hacer una tabla
var increasingTriplet = function(nums) {
    let min = nums[0];
     let secondMinUpdatedAfterMin = Infinity;
     for (let val of nums) {
         if (val <= min) {
             min = val;
         } else if (val <= secondMinUpdatedAfterMin) {
             secondMinUpdatedAfterMin = val;
         } else {  // min < secondMinUpdatedAfterMin < val
             return true;
         }
     }
     return false;
 };


console.log(findcons(conseq));