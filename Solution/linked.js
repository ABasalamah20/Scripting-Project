
/**
 * Onsubmit event to handles orders more than 3 pizzas
 * This function calculates the best option for the customer when buying more than 3 pizzas
 * Get the amountOfPizzas from the user input
 * @param {number} amountOfPizzas Number of pizzas the customer ordered
 * @returns {number} Best price for the customer
 */
function bestOption(amountOfPizzas) {
    let remainder = amountOfPizzas % 3
    if (remainder === 0){
        price = 14 * Math.floor((amountOfPizzas / 3))
        return price
    } else if(remainder === 2) {
        price = 14 * Math.floor((amountOfPizzas / 3))
        price += 12
        return price
    } else if(remainder === 1) {
        price = 14 * Math.floor((amountOfPizzas / 3))
        price += 6.45
        return price
    } 
}

//variable to hold the price for the customer
let price;

/**
 * Onsubmit event that calculates the price for a customer
 * This function takes the number of pizzas from the customer and gives them a price. If the number
 * of pizzas is more than 3 it will call another function
 */
function checkQuantity() {
    event.preventDefault()
    let priceMessage = document.getElementById('message');
    let quantity = document.getElementById('quantity');

    pizzaQuantity = parseInt(quantity.value);
    console.log(pizzaQuantity)

    if(pizzaQuantity > 3) {
        bestOption(pizzaQuantity)
    } else if(pizzaQuantity === 1){
        price = 6.45
    } else if(pizzaQuantity === 2) {
        price = 12.00
    } else if(pizzaQuantity === 3) {
        price = 14.00
    } else {
        bestOption(pizzaQuantity)
        alert(`Please enter a number greater than 0`)
    }

    priceMessage.innerHTML = `The total cost for your pizzas is $${price}`
}