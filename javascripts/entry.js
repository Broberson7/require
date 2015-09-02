requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../bower_components/jquery/dist/jquery.min"
	}
});

require(["SandwichMaker"]), function() {


};

//   $("#breads").change(function() {
//     var chosenBread = $(this).val();
//     var breadPrice = bread.getBreadPrice(chosenBread);
//     console.log("breadPrice", breadPrice);
//   });

// });

// require(["jquery", "cheese"], function($, cheese) {

//   console.log("cheese", cheese);

//   $("#cheese").change(function() {
//     var chosenCheese = $(this).val();
//     var cheesePrice = cheese.getCheesePrice(chosenCheese);
//     console.log("cheesePrice", cheesePrice);
//   });

//  });
 
//  require(["jquery", "meat"], function($, meat) {

//   console.log("meat", meat);

//   $("#meat").change(function() {
//     var chosenMeat = $(this).val();
//     var meatPrice = meat.getMeatPrice(chosenMeat);
//     console.log("meatPrice", meatPrice);
//   });

//  }); 

//  require(["jquery", "condiments"], function($, condiments) {

//   console.log("condiments", condiments);

//   $("#condiments").change(function() {
//     var chosenCondiments = $(this).val();
//     var condimentsPrice = condiments.getCondimentsPrice(chosenCondiments);
//     console.log("condimentsPrice", condimentsPrice);
//   });

//  }); 

//  require(["jquery", "veggies"], function($, veggies) {

//   console.log("veggies", veggies);

//   $("#veggies").change(function() {
//     var chosenVeggies = $(this).val();
//     var veggiesPrice = veggies.getVeggiesPrice(chosenVeggies);
//     console.log("veggiesPrice", veggiesPrice);
//   });
//  }); 