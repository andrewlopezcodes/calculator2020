

var box = document.getElementById('display');

function toScreen (x){
    box.value+= x;
    if(x === 'C'){
      box.value='';
    }
}

function equal(){
  x = box.value;
  x= eval(x);
  box.value=x;
}

function power(){
  x=box.value;
  x = eval(x*x);
  box.value =x;
}

function backspace(){
  let num = box.value;
  let len = num.length-1;
  let newNum = num.substring(0,len);
  box.value = newNum;
}

function negation(){
  let num = box.value;
  let x = eval(num);
  if(x > 0){
    x = x * -1;
    box.value = x.toString();
  } else {
    x = x * -1;
    box.value = x.toString();
  }
  
}