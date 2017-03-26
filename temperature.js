"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

function Temperatura (valor, tipo){
  Medida.call(this, valor, tipo);
}

Temperatura.prototype = new Medida();

Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo = function(){return this.tipo_;}

Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}

//Convertir Celsius a Farenheit
Temperatura.prototype.convertirC_F = function(){
  return ((this.get_valor()*9)/5)+32;
}
//Convertir Celsius a Kelvin
Temperatura.prototype.convertirC_K = function(){
  return (this.get_valor()+273.15);
}
//Convertir Farenheit a Celsius
Temperatura.prototype.convertirF_C = function(){
  return ((this.get_valor()-32)*5)/9;
}
//Convertir Farenheit a Kelvin
Temperatura.prototype.convertirF_K = function(){
  return (((this.get_valor()-32)*5)/9)+273.15;
}
//Convertir Kelvin a Celsius
Temperatura.prototype.convertirK_C = function(){
  return (this.get_valor()-273.15);
}
//Convertir Kelvin a Farenheit
Temperatura.prototype.convertirK_F = function(){
  return (((this.get_valor()-273.15)*9)/5)+32;
}

Temperatura.prototype.mostrar = function(){
  var result = this.get_valor() + " " + this.get_tipo();
  return result;
}

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(?:to)?\s*([fFcCkK])/;

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
