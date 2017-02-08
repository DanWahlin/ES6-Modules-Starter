'use strict';

System.register(['./car', './truck'], function (_export, _context) {
	"use strict";

	var Car, Truck, car, truck, output;
	return {
		setters: [function (_car) {
			Car = _car.Car;
		}, function (_truck) {
			Truck = _truck.Truck;
		}],
		execute: function () {
			car = new Car({
				price: 30000, make: 'Chevy', model: 'Malibu',
				year: 2014, isElectric: false, isHatchback: false
			});
			truck = new Truck({
				price: 40000, make: 'Ford', model: 'F150',
				year: 2014, is4by4: true
			});
			output = document.getElementById('output');

			output.innerHTML += '\n\t<br/>' + car.getDetails() + '\n    <br/>Car total: ' + car.getTotal(.08) + '\n\t<br/><br />\n\t' + truck.getDetails() + '\n\t<br/>Truck total: ' + truck.getTotal(.08) + '\n\t';
		}
	};
});
//# sourceMappingURL=main.js.map
