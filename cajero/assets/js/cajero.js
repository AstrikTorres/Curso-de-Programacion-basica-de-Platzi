class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var imagenes = [];
imagenes["500"] = "assets/images/500pesos.jpg";
imagenes["200"] = "assets/images/200pesos.jpg";
imagenes["100"] = "assets/images/100pesos.jpg";
imagenes["50"] = "assets/images/50pesos.jpg";
imagenes["20"] = "assets/images/20pesos.jpg";

function entregarDinero()
{
    var t = document.getElementById('dinero');
    dinero = parseInt(t.value);
    for(var b of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / b.valor);
            if (div > b.cantidad)
            {
                papeles = b.cantidad
            }
            else
            {
                papeles = div;
            }
            
            entregado.push (new Billete(b.valor, papeles) );
            dinero = dinero - (b.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = 'Soy un cajero pobre y no tengo tal cantidad ):';
    }
    else
    {
      resultado.innerHTML += "<p>Retiraste:<br /></p>";
  
      for(var e of entregado)
      {
        if(e.cantidad > 0)
        {
          for(var bi = 1; bi <= e.cantidad ;bi++)
          {
            resultado.innerHTML += "<img src=" + e.imagen.src + " width=200px />" + "<br /><hr />";
          }
        }
      }
    }
}


var caja = [];
caja.push( new Billete(500, 4,) );
caja.push( new Billete(200, 5) );
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 30) );

var entregado = [];

var dinero;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado")
var b = document.getElementById('extraer');
b.addEventListener('click', entregarDinero);
