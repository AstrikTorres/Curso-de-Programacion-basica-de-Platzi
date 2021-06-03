var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

// document.getElementById("x")
// Se usa para usar el objeto creado en el html

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

// Ejercicio de dibujo invertido 

// let l = 1
// do 
// {
//     xf = 300 - (10 * l);
//     yi = 10 * l;
//     dibujarlinea("purple", 300, yi, xf, 300);
//     console.log("linea " + l);
//     l++
// } while (l < 31)

// Otra opcion con for
//
// for(l = 1; l < 31; l++)
// {
//    xf = 300 - (10 * l);
//    yi = 10 * l;
//    dibujarlinea("purple", 300, yi, xf, 300);
//    console.log("linea " + l);
// }

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "purple";
    var espacio = ancho / lineas;
    var ancho_1 = ancho - 1

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarlinea(colorcito, 0, yi, xf, 500);
        console.log("linea " + 1);
    }

    dibujarlinea(colorcito, 1,1,1, ancho_1);
    dibujarlinea(colorcito, 1, ancho_1, ancho_1, ancho_1);
}