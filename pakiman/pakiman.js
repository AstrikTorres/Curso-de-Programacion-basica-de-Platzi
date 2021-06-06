// Con la clase packiman se crea la definicion de un objeto
class Pakiman
{
    /*Esto se dispara cuando se crea el objeto, parece una funcion*/
    constructor(n, v, a)
    {
        this.imagen = new Image
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre]
    }
    /*Todo bloque de codigo dentro de una clase es una funcion*/
    hablar()
    {
        alert(this.nombre);
    }
    //Aqui se va a agregar la imagen
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write('<p>');
        document.write('<strong>' + this.nombre +'</strong><br />');
        document.write('Vida: ' + this.vida +'<br />');
        document.write('Ataque: ' + this.ataque);
        document.write('</p>' + '<hr />');
    }
}