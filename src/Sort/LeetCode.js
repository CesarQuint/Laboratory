const arr1 ="a        b        c"
const arr2 ="pqefteg"

//!Puede haber errores ya que si hay espacios no fucniona ,uzar la funcion trim
const mix =(arr1,arr2)=>{
    let l 
    let newString = ''
    //*Otra solucion de LeetCode
    // let maxLength = Math.max(word1.length, word2.length);
    arr1.length > arr2.length ? l = arr1.length :l = arr2.length 
    for (let i = 0; i < l; i++) {
            newString = newString + `${[arr1[i]]}`+`${[arr2[i]]}`
    }
    console.log(newString);
}


const str1 = "ABABAB"
const str2 = "ABAB"

const divideReturn =(str1,str2)=>{
    //*Sistema Recursivo
    if (str1 + str2 != str2 + str1) return ''
    let m = str1.length
    let n = str2.length

    let gcd = function (x, y) {
        if (!y) return x
        return gcd(y, x % y)
    }

    let div = gcd (m, n)
    return str1.slice(0, div)
}

//*Sistema Iterativo
var gcdOfStrings = function(str1, str2) {
    // gcdString will be <= gcd of the lengths of the two strings
    // so we only need to check substrings that are <= gcd of the lengths of the two strings
    if (str1 + str2 != str2 + str1) return '';

    return str1.substring(0, gcd(str1.length, str2.length));
};

const gcd = function(a, b) {
while (a != b){
    if (a > b) {
    a -= b;
    }
    else {
    b -= a;
    }
}
return a;
}

//!!Esto es lo que sucede dentro del bloque gcd
// 10 != 4
// 10 > 4
// 10 - 4 == 6
// 6 != 4 
// 6 > 4
// 6 - 4 == 2