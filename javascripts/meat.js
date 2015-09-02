define ([], function() {

	var meatPrices = {
		Turkey: 1.00,
		Ham: 2.25,
		Salami: 3.00,
		Bacon: 4.00

	};


	return {
		getPrice: function(chosenMeat) {
			return meatPrices[chosenMeat];
		}
	};
});	