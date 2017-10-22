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
    matilde.comer();
    matilde.ordennar();

    var juana = new Animal('Juana');
    juana.comer();
    juana.setApodo('Juanita');
    juana.decirApodo();

    var lola = new Animal('Lola');
    lola.comer();
    lola.setApodo('Lolita');
    lola.decirApodo();

    juana.decirApodo();

    console.log(matilde);
    console.log(juana);
    console.log(lola);

    console.log(lola.getApodo());
    lola.removerApodo();
    console.log(lola.getApodo());
    //console.log(Object.getOwnPropertyNames(Vaca.prototype));

}