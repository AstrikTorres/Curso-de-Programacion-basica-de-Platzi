var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = 'vaca.png';
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = 'cerdo.png';
cerdo.addEventListener("load", moverCerdo);

var pollo = new Image();
pollo.src = 'pollo.png';
pollo.addEventListener("load", dibujarPollos);


function dibujar()
{
    papel.drawImage(fondo, 0, 0);
}

function dibujarVacas()
{
    var cantidad = aleatorio(1, 5);
    for(var v=0; v < cantidad; v++)
    {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(vaca, x, y);
        console.log('vacas')
    }
}


function dibujarPollos()
{
    var cantidad = aleatorio(1, 10);
    for(var v=0; v < cantidad; v++)
    {
        var x = aleatorio(0, 420)
        var y = aleatorio(0, 420)
        papel.drawImage(pollo, x, y);
        console.log('pollos')
    }
}

/* Poner numeros aleatorios en el documento
var z;

for(var i=0; i<10; i++)
{
    z = aleatorio(10, 20);
    document.write(z + ", ");
}
*/

var xc = 0;
var yc = 0;

function moverCerdo(xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function moverTeclacdo(evento)
{
   var movimiento = 8
    switch(evento.keyCode)
   {
        case teclas.LEFT:
            moverCerdo(xc, yc, xc - movimiento, yc, papel);
            xc = xc - movimiento;
        break;
        case teclas.UP:
            moverCerdo(xc, yc, xc, yc - movimiento, papel);
            yc = yc - movimiento;
        break;
        case teclas.RIGHT:
            moverCerdo(xc, yc, xc + movimiento, yc, papel);
            xc = xc + movimiento;
        break;
        case teclas.DOWN:
            moverCerdo(x, y, x, y + movimiento, papel);
            yc = yc + movimiento;
   }
}

function aleatorio(min,max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}