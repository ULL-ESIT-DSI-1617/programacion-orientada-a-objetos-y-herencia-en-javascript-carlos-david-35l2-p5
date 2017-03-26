"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida (valor, tipo_origen, tipo_destino) {
  this.valor_ = valor;
  this.tipo_origen_ = tipo_origen;
  this.tipo_destino_ = tipo_destino;
}

function Temperatura (valor, tipo_origen, tipo_destino){
  Medida.call(this, valor, tipo_origen, tipo_destino);
}

Temperatura.prototype = new Medida();

Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo_origen = function(){return this.tipo_origen_;}
Medida.prototype.get_tipo_destino = function(){return this.tipo_destino_;}

Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo_origen = function(tipo_origen){this.tipo_origen_ = tipo_origen;}
Medida.prototype.set_tipo_destino = function(tipo_destino){this.tipo_destino_ = tipo_destino;}

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
  var result = this.get_valor() + " " + this.get_tipo_destino();
  return result;
}

function calculate() {
  var result = new Temperatura();
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(?:to)?\s*([fFcCkK])/;

  var m = temp.match(regexp);
  if (m) {
    var t = new Temperatura()

    t.set_valor(parseFloat(m[1]));
    t.set_tipo_origen(m[2]);
    t.set_tipo_destino(m[3]);

    if ((t.get_tipo_origen() == 'c' || t.get_tipo_origen() == 'C') && ((t.get_tipo_destino() == 'f' || t.get_tipo_destino() == 'F'))) {
      result.set_valor(t.convertirC_F());
      result.set_tipo_destino("F");
    }
    else if ((t.get_tipo_origen() == 'c' || t.get_tipo_origen() == 'C') && ((t.get_tipo_destino() == 'k' || t.get_tipo_destino() == 'K'))) {
      result.set_valor(t.convertirC_K());
      result.set_tipo_destino("K");
    }
    else if ((t.get_tipo_origen() == 'f' || t.get_tipo_origen() == 'F') && ((t.get_tipo_destino() == 'c' || t.get_tipo_destino() == 'C'))) {
      result.set_valor(t.convertirF_C());
      result.set_tipo_destino("C");
    }
    else if ((t.get_tipo_origen() == 'f' || t.get_tipo_origen() == 'F') && ((t.get_tipo_destino() == 'k' || t.get_tipo_destino() == 'K'))) {
      result.set_valor(t.convertirF_K());
      result.set_tipo_destino("K");
    }
    else if ((t.get_tipo_origen() == 'k' || t.get_tipo_origen() == 'K') && ((t.get_tipo_destino() == 'c' || t.get_tipo_destino() == 'C'))) {
      result.set_valor(t.convertirK_C());
      result.set_tipo_destino("C");
    }
    else if ((t.get_tipo_origen() == 'k' || t.get_tipo_origen() == 'K') && ((t.get_tipo_destino() == 'f' || t.get_tipo_destino() == 'F'))) {
      result.set_valor(t.convertirK_F());
      result.set_tipo_destino("F");
    }
    var muestra = result.mostrar();
    converted.innerHTML = muestra;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C to K' or '35C F' instead";
  }
}
