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

console.log(orderandCounter(big_str,str))

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