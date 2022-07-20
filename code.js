function convertToRoman(num) {
  let romanList = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanFinal = "";
  
  for (let i = 0; i < romanList.length; i++){
    while (num >= numList[i]){
      romanFinal += romanList[i];
      num -= numList[i];
    }
  }
  return romanFinal;
}
