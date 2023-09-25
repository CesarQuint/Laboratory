const big_str ="baab"
const str ="ab"

//*Mi solucion
const orderandCounter =(bigArr,smallArr)=>{
    bigArr = bigArr.split('')
    smallArr = smallArr.split('')
    bigArr = bigArr.filter(obj=> smallArr.includes(obj))
    bigArr = bigArr.join('')
    smallArr = smallArr.join('')
    if(bigArr == smallArr)
        return true
    return false
}


const t ="baab"
const s ="ab"

//!Solucion con 2 punteros
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
                //!5
    while( j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length ? true: false;
};

//Solucion mas rapida 
var isSubsequence = function(s, t) {
    let sIndex = 0;

    for (let i = 0; i < t.length && sIndex < s.length; i++){
        if(t[i] === s[sIndex]) sIndex++;
    }

    return sIndex >= s.length;
};

//*max area
const a =[1,8,6,2,5,4,8,3,7]

const maxArea =(array)=>{
    let result
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length-1; j > 0 ; j--) {
            if(array[i] == array[j]){
                console.log(array[i]);
            }
        }
    }
    return result
}

console.log(maxArea(a))

var maxArea2 = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};

console.log(Math.min(10,2)*(10-2));