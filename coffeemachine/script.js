// Coffee Machine resources
let resources = {
    water: 500,  // in ml
    milk: 300,   // in ml
    coffee: 100, // in grams
    cups: 5
};

// Coffee recipes
const coffeeRecipes = {
    espresso: { water: 50, milk: 0, coffee: 18, cups: 1 },
    latte: { water: 200, milk: 150, coffee: 24, cups: 1 },
    cappuccino: { water: 250, milk: 100, coffee: 24, cups: 1 }
};

// Function to make coffee
function makeCoffee(type) {
    const recipe = coffeeRecipes[type];

    if (resources.water >= recipe.water && 
        resources.milk >= recipe.milk && 
        resources.coffee >= recipe.coffee && 
        resources.cups >= recipe.cups) {

        // Deduct resources
        resources.water -= recipe.water;
        resources.milk -= recipe.milk;
        resources.coffee -= recipe.coffee;
        resources.cups -= recipe.cups;

        document.getElementById('machineStatus').innerText = `Enjoy your ${type}!`;
    } else {
        document.getElementById('machineStatus').innerText = `Not enough resources for ${type}.`;
    }

    updateResourceDisplay();
}

// Function to update resource levels in the UI
function updateResourceDisplay() {
    document.getElementById('waterLevel').innerText = resources.water;
    document.getElementById('milkLevel').innerText = resources.milk;
    document.getElementById('coffeeLevel').innerText = resources.coffee;
    document.getElementById('cupCount').innerText = resources.cups;
}

// Function to add resources
function addResources() {
    resources.water = 500;
    resources.milk = 300;
    resources.coffee = 100;
    resources.cups = 5;

    document.getElementById('machineStatus').innerText = "Resources refilled!";
    updateResourceDisplay();
}

// Initial display update
updateResourceDisplay();
