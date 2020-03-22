

var box = document.getElementById('display');
var pointed = document.getElementById('point');




function toScreen (x){
    box.value+= x;
    if(x === 'C'){
      box.value='';
    }
    pointed.disabled = false;
}

function point(){
  let num = box.value;
  let point = "."
  if(num.includes(point) === false){
    toScreen(point);
    pointed.disabled = true;
  }
}

function equal(){
  x = box.value;
  x = eval(x);
  box.value = x;
  pointed.disabled = false;
}

function power(){
  x = box.value;
  x = eval(x*x);
  box.value = x;
  pointed.disabled = false;
}

function backspace(){
  let num = box.value;
  let len = num.length -1;
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
};

function squareRoot(){
  let num = box.value;
  let x = Math.sqrt(eval(num));
  box.value = x; 
}
