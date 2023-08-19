miles = document.getElementById('miles');
mpg = document.getElementById('mpg');
fuelPrice = document.getElementById('fuel-price');

litresNeeded = document.getElementById('litres-needed');
journeyCost = document.getElementById('journey-cost');
costPerMile = document.getElementById('cost-per-mile');

function calculate() {
	litres = (miles.value/mpg.value * 4.546).toFixed(2);
	totalCost = (litres * fuelPrice.value/100).toFixed(2);

	litresNeeded.value = litres;
	journeyCost.value = totalCost;
	costPerMile.value = (totalCost / miles.value).toFixed(2);
}