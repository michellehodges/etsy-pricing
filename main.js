// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let avgPrice = 0;

  for (let i = 0; i < data.length; i++) {
    avgPrice = avgPrice + data[i].price/25;
  }

  console.log("The average price is " + avgPrice)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let betweenBudget = [ ];

  for (let i = 0; i < data.length; i++) {
    if (14.00 <= data[i].price && data[i].price <= 18.00) {
      betweenBudget.push(data[i].title);
    }
  }
  console.log(betweenBudget);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbpItem = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbpItem.push(data[i].title)
      gbpItem.push(data[i].price)
    }
  }
  console.log(gbpItem[0] + " costs " + gbpItem[1] + " pounds.")
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (let i = 0; i < data.length; i++) {
    for (let k = 0; k < data[i].materials.length; k++) {
    if (data[i].materials[k] === "wood") {
      woodItems.push(data[i].title)
    }
    }
  }

  for (let i = 0; i < woodItems.length; i++) {
  console.log(woodItems[i] + " is made of wood.")
}
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title + " has " + data[i].materials.length + " materials.");
      for (let j = 0; j < data[i].materials.length; j++) {
        console.log("- " + data[i].materials[j]);
      }
    }
  }
  }



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let totalHandmade = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      totalHandmade.push(data[i].title)
    }
  }

  console.log(totalHandmade.length + " items were made by their sellers.")

}
