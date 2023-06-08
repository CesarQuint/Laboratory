
//*Mi solucion
const maxOp = (arr,total)=>{
    if(total == 1)
        return
    let totalR = 0
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
           if(arr[index]+arr[j] === total)
            arr=arr.filter(obj => obj !== arr[index])
            arr=arr.filter(obj => obj !== arr[j])
            totalR +=1
        }
    }
    return totalR
}


var maxOperations = function(nums, k) {
    let freq = new Map(),count=0; 
    for (let i = 0; i < nums.length; i++) {
        if (freq.get(k-nums[i])) {
            if(freq.get(k-nums[i])==1) freq.delete(k-nums[i])
            else freq.set(k-nums[i],freq.get(k-nums[i])-1)
            count++;
        }else freq.set(nums[i],freq.get(nums[i])+1||1)
        console.log(freq);
    } 
    return count;
};

//!Otra solucion 

let nums = [3,5,1,5], k = 6

var maxOperations = function(nums, k) {
    let m = new Map(), ans = 0
    for (let n of nums)
        if (n < k)
            if (m.get(k - n)) m.set(k - n, m.get(k - n) - 1), ans++
            else m.set(n, (m.get(n) || 0) + 1)
    return ans
};

console.log(maxOperations(nums,k));
