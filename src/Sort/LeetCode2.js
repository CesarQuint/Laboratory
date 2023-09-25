const flowerbed = [1,0,0,0,1,0,1,0,0,0,0,1,0,0], n = 2

//!!Este codigo tiene fallas ya que si hay 0000 o +0 el codigo fallara
//-Problema solucionado
const plant = (flowerbed,n)=>{
    let trues = 0

    for (let index = 0; index < flowerbed.length; index++) {
        if( (flowerbed[index-1] !== 1 ) && flowerbed[index]== 0 && (flowerbed[index+1] !== 1 )){
            flowerbed[index]=1
            trues += 1
        }
    }

    console.log(trues);
    console.log(flowerbed);
    if(trues >= n)
        return true
    return false
}


//*************************************************************/

const  s = "hello"
var reverseVowels = function(s) {
    //*Js interpreta todo los valores direferentes a 0 como verdadero por lo que si sale un 0 no procesara la funcion
    const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    const arr = s.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
       //*En este caso corremos desde el final y comienzo del string
        if (VOWELS[arr[i]] && VOWELS[arr[j]]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (VOWELS[arr[i]]) {
            j--;
        } else {
            i++;
        }
    }
    return arr.join('');
};

const arrEx ="hellow world this is a"
"a is this world hellow"

//*Mi codigo
const orderArr= (arr) =>{
    arr = arr.split(" ")
    let j = arr.length-1
    for (let index = 0; index < arr.length-1; index++) {
       if(index < j){
        [arr[index],arr[j]]=[arr[j],arr[index]]
        j--
       }
    }
    arr= arr.filter(arr=> arr !== '')
    return arr.join(' ')
}

//*Solucion mas plactica y encadenada
//!El metodo reverse hace lo mismo que el for if anterior
console.log(arrEx.split(" ").reverse().filter(w => w !== "").join(" "));