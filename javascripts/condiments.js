define ([], function() {

	var condimentsPrices = {
		Mayo: 0.00,
		Ketchup: 0.00,
		Mustard: 0.00

	};


	return {
		getPrice: function(chosenCondiments) {
			return condimentsPrices[chosenCondiments];
		}
	};
});	