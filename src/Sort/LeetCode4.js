const str = ["a","a","b","b","c","c","c"]

//Array Compressing

var compress = function(chars) {
    //Revisar que el arreglo sea pequeño
    if (!chars.length) return 0;
    let j = 0;
    let cur = chars[0]; //a(Cuando Inicia)
    let counter = 0;
    for (let i = 0; i <= chars.length; i++) {
      if (chars[i] === cur) {
        counter++;
      } else {
        chars[j] = cur;
        if (counter > 1) {
                const s = counter.toString();
                //*verifica que el counter sea +0 y si el s es 10 o mas lo divide en "1","0"
                for (let k = 0; k < s.length; k++) chars[++j] = s[k];
            }
        j++;
        cur = chars[i];
        counter = 1;
      }
    }
    return j;
  };

  console.log(compress(str));

//!Estudio sobre Map y sets

const str2 = [0,1,0,3,12]

const order = str =>{
  let counter = []
  if(str.length < 1)
    return str
  for (let index = str.length; index >= 0; index--) {
    if(str[index]== 0){
      counter = [...counter,0]
    }
  }
  console.log(counter);
  str = str.filter(obj => obj !== 0)
  str = str.concat(counter)
  return str
}

console.log(order(str2));

let pointer = 0
for (let i in nums){
    if (nums[i] !== 0){
        [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
        pointer++
    }
}
return nums