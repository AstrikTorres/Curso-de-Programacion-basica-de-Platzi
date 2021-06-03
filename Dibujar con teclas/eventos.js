var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

// Dibujo del punto inicial
dibujarlinea("orange", 149, 149, 151, 151, papel)
// dibujo del borde
dibujarlinea("red", 0, 0, 300, 0, papel)
dibujarlinea("red", 300, 0, 300, 300, papel)
dibujarlinea("red", 300, 300, 0, 300, papel)
dibujarlinea("red", 0, 300, 0, 0, papel)

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
   var colorcito = "orange"
   var movimiento = 8
    switch(evento.keyCode)
   {
        case teclas.LEFT:
            dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.UP:
            dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
   }
}