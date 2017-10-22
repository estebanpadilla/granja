var Animal = (
	function () {

		//Private variable Symbols
		var apodo = Symbol();

		//Private methods Symbols
		var metodoPrivado = Symbol();

		function Animal(pnombre) {
			//Public variables
			this.nombre = pnombre;

			//Private variables
			this[apodo] = 'ninguno';

			//Private methods
			this[metodoPrivado] = function () {
				this[apodo] = 'ninguno';
			};
		}

		//Base class methods
		Animal.prototype.comer = function () {
			console.log(this.nombre + ' es un animal y está comiendo.');
		}

		Animal.prototype.decirApodo = function () {
			console.log(this[apodo]);
		}

		Animal.prototype.removerApodo = function () {
			return this[metodoPrivado]();
		}

		//Properties
		Animal.prototype.setApodo = function (pApodo) {
			this[apodo] = pApodo;
		}

		Animal.prototype.getApodo = function (pApodo) {
			return this[apodo];
		}

		return Animal;

	})();