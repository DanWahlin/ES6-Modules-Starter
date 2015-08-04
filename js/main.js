import {Car} from 'car';
import {Truck} from 'truck';

let car = new Car({
	price: 30000, make: 'Chevy', model: 'Malibu',
	year: 2014, isElectric: false, isHatchback: false
});

let truck = new Truck({
	price: 40000, make: 'Ford', model: 'F150',
	year: 2014, is4by4: true
});

var output = document.getElementById('output');
output.innerHTML += `
	<br/>${car.getDetails() }
    <br/>Car total: ${car.getTotal(.08) }
	<br/><br />
	${truck.getDetails() }
	<br/>Truck total: ${truck.getTotal(.08) }
	`;
