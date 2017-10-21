function Vaca(pnombre) {
	this.nombre = pnombre;
}

Vaca.prototype.comer = function () {
	console.log('La vaca ' + this.nombre + ' esta comiento!');
}