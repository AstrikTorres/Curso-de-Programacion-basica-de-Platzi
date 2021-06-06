var imagenes = [];
imagenes['Cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';

class Pakiman
{
    constructor(n, v, a)
    {
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
    }
    hablar()
    {
        alert(this.nombre);
    }
}

var cauchin = new Pakiman('Cauchin', 100, 30);
var pokacho = new Pakiman('Pokacho', 80, 50);
var tocinauro = new Pakiman('Tocinauro', 120, 40);
console.log(cauchin, pokacho, tocinauro);