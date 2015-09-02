define ([], function() {

	var cheesePrices = {
		American: 0.25,
		Swiss: 0.75,
		Cheddar: 2.50

	};


	return {
		getPrice: function(chosenCheese) {
			console.log(chosenCheese);
			return cheesePrices[chosenCheese];
		}
	};
});	