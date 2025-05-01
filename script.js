const inputNumber = document.getElementById("number");
const btnConvert = document.getElementById("convert-btn");
const output = document.getElementById("output");

function printRoman(num){
let numerals= {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
roman = "",
i;
  for ( i in numerals) {
    while ( num >= numerals[i] ) {
      roman += i;
      num -= numerals[i];
    }
  }
  return roman;
}


btnConvert.addEventListener("click", ()=>{  
  if(inputNumber.value === ""){
    output.textContent = "Please enter a valid number"
  } else if(inputNumber.value < 0){
output.textContent = "Please enter a number greater than or equal to 1"
  } else if(inputNumber.value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
  } else{
    output.textContent = printRoman(inputNumber.value);
  }
})