window.addEventListener('load', init, false);

function init() {
    /*
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    */

    var matilde = new Vaca('Matilde');
    var juana = {
        nombre: 'juana'
    };
    console.log('El nombre de la primera vaca es ' + matilde.nombre);
    console.log('El nombre de la primera vaca es ' + matilde['nombre']);
    console.log(matilde);
    console.log(juana);

    matilde.comer();
}