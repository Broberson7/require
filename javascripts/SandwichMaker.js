define(["jquery", "bread", "meat", "veggies", "cheese", "condiments"], 
  function($, bread, meat, veggies, cheese, condiments) {
    var sandwichPrice = 0;

    var toppingModules = {
      bread: bread,
      meat: meat,
      veggies: veggies,
      cheese: cheese,
      condiments: condiments
    }

    console.log("toppingModules", toppingModules)

    $(".topping").change(function() {
      var chosenTopping = $(this).val();
      var toppingId = $(this).attr("id");
      var toppingPrice = toppingModules[toppingId].getPrice(chosenTopping);
      console.log(toppingPrice);
      sandwichPrice += toppingPrice;
      $("#priceDisplay").html("Your sandwich will cost $" + parseFloat(sandwichPrice).toFixed(2));
    });
  }
);