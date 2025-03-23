let resources = {
    water: 1000, // in ml
    milk: 500,   // in ml
    beans: 200   // in grams
};

let drinks = {
    espresso: { water: 50, milk: 0, beans: 18 },
    americano: { water: 100, milk: 0, beans: 18 },
    latte: { water: 50, milk: 150, beans: 18 },
    cappuccino: { water: 50, milk: 100, beans: 18 },
    mocha: { water: 50, milk: 100, beans: 18 }
};

// Function to make coffee
document.getElementById('makeCoffee').addEventListener('click', () => {
    let selectedDrink = document.getElementById('drinkSelect').value;
    let drink = drinks[selectedDrink];

    if (resources.water >= drink.water && resources.milk >= drink.milk && resources.beans >= drink.beans) {
        resources.water -= drink.water;
        resources.milk -= drink.milk;
        resources.beans -= drink.beans;
        document.getElementById('machineStatus').innerText = `Your ${selectedDrink} is ready!`;
    } else {
        document.getElementById('machineStatus').innerText = `Not enough resources to make ${selectedDrink}.`;
    }

    updateResourcesDisplay();
});

// Function to add resources
document.getElementById('addResources').addEventListener('click', () => {
    resources.water += parseInt(document.getElementById('addWater').value);
    resources.milk += parseInt(document.getElementById('addMilk').value);
    resources.beans += parseInt(document.getElementById('addBeans').value);
    
    document.getElementById('machineStatus').innerText = 'Resources added!';
    
    updateResourcesDisplay();
});

// Function to update the resource display
function updateResourcesDisplay() {
    document.getElementById('waterLevel').innerText = `Water: ${resources.water}ml`;
    document.getElementById('milkLevel').innerText = `Milk: ${resources.milk}ml`;
    document.getElementById('beansLevel').innerText = `Coffee Beans: ${resources.beans}g`;
}

// Initial resource display
updateResourcesDisplay();
