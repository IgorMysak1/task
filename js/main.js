const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
let lenArr = document.querySelector('.lenArr');
let answer = document.querySelector('.answer');
let finalSum = "";
let num;
btn.addEventListener('click' , countNumber);
function countNumber(){
  let number = inp.value;
  if(number > 0) {
    if(number%2 == 1 || number%2 == 0 ){
      let arr = number.split("");
      lenArr.textContent = "Довжина числа " + arr.length;
      for(i = 0 ; i < arr.length ; i++){
        if (arr[i]%2 == 1){
          num = +arr[i];
          console.log(num);
          finalSum = finalSum + num;
        }else if(arr[i]%2 == 0){
          num = +arr[i] + +1;
          console.log(num);
          finalSum = finalSum + num;
        }
      };
      answer.textContent = "Відповідь: " + finalSum;
      finalSum = "";
    }else{
      lenArr.textContent = "Ведіть натуральне число";
      answer.textContent = "";
      finalSum = "";
    }
  }else{
    lenArr.textContent = "Ведіть натуральне число";
    answer.textContent = "";
    finalSum = "";
  }
};
