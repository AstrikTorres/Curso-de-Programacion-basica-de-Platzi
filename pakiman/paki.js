// Este es un array asociativo
var imagenes = [];
imagenes['Cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';

var coleccion = [];
// Cada push indica un indice
coleccion.push( new Pakiman('Cauchin', 100, 30) );
coleccion.push( new Pakiman('Pokacho', 80, 50) );
coleccion.push( new Pakiman('Tocinauro', 120, 40) );

// Este ciclo solo opera la cantidad de objetos que esta dentro del array. En este caso el array coleccion
for(var pakimanes of coleccion)
{
    pakimanes.mostrar();
}