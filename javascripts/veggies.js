define ([], function() {

	var veggiesPrices = {
		Lettuce: 0.50,
		Tomatoes: 0.50,
		Onions: 0.50,
		Avocado: 2.00

	};


	return {
		getPrice: function(chosenVeggies) {
			return veggiesPrices[chosenVeggies];
		}
	};
});	