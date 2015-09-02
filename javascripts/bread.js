define ([], function() {

	var breadPrices = {
		White: 0.75,
		Wheat: 1.25,
		Italian: 2.50

	};

	console.log("breadPrices", breadPrices)


	return {
		getPrice: function(chosenBread) {
			console.log(chosenBread);
			return breadPrices[chosenBread];

		}
	};
});	
