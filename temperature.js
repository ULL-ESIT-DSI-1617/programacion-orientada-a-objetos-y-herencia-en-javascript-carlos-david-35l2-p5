"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

function Temperatura (valor, tipo){
  Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Medida();

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
