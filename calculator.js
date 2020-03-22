

var box = document.getElementById('display');
var pointed = document.getElementsByClassName('point');
var button = document.getElementsById('keys');




function toScreen (x){
  box.value+= x;
  if(x === 'C'){
    box.value='';
  }
  pointed.disabled = false;
};

function point(){
  let num = box.value;
  let point = "."
  if(num.includes(point) === false){
    toScreen(point);
    pointed.disabled = true;
  }
};

function equal(){
  x = box.value;
  x = eval(x);
  box.value = x;
  pointed.disabled = false;
};



function backspace(){
  let num = box.value;
  let len = num.length -1;
  let newNum = num.substring(0,len);
  box.value = newNum;
};

//Modual Opperatoros 
// ----------------------------------------
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
  equal();
};

function squareRoot(){
  let num = box.value;
  let x = Math.sqrt(eval(num));
  box.value = x; 
  equal();
};

function power(){
  x = box.value;
  x = eval(x*x);
  box.value = x;
  equal();
  pointed.disabled = false;
};

function percent(){
  x = box.value;
  x = eval(x/100);
  box.value = x;
  equal();
  pointed.disabled = false;
};

function oneOver(){
  x = box.value;
  x = eval(1/x);
  box.value = x;
  equal();
  pointed.disabled = false;
};


// This code was written by github: @andrewlopezcodes