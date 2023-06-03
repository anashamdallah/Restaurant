'use strict'
let foodsArray = [];
function Food( id, name, type, price) {
    this.foodId = id;
    this.foodName = name;
    this.foodType = type;
    this.foodPrice = price;
    foodsArray.push(this);
}

Food.prototype.foodId = function () {
    let min = 1000;
    let max = 1099;
    const id = Math.floor((Math.random() * (max - min + 1)) + min);
    return id;
}

Food.prototype.renderTable = function () {
    let newRow = document.createElement('tr')
    foods.appendChild(newRow);

    let foodId = document.createElement('td')
    foodId.textContent = Food.prototype.foodId(this);;
    newRow.appendChild(foodId);

    let foodName = document.createElement('td');
    foodName.textContent = this.foodName;
    newRow.appendChild(foodName);

    let foodType = document.createElement('td');
    foodType.textContent = this.foodType;
    newRow.appendChild(foodType);

    let foodPrice = document.createElement('td');
    foodPrice.textContent = this.foodPrice;
    newRow.appendChild(foodPrice);

    /*****styling *****/
    foodId.style.borderStyle = " solid "
    foodId.style.borderColor = "#fcf9f9"
    foodName.style.borderStyle = "solid "
    foodName.style.borderColor = "#fcf9f9"
    foodType.style.borderStyle = "solid "
    foodType.style.borderColor = "#fcf9f9"
    foodPrice.style.borderStyle = "solid "
    foodPrice.style.borderColor = "#fcf9f9"

}

function render() {
    let foods = document.getElementById('foods');

    // clean the html elements 
    foods.innerHTML = '';

    let row = document.createElement('tr')
    foods.appendChild(row);

    let colId = document.createElement('th')
    colId.textContent = "ID"
    row.appendChild(colId);

    let colName = document.createElement('th')
    colName.textContent = "Name"
    row.appendChild(colName);

    let colType = document.createElement('th')
    colType.textContent = "Type"
    row.appendChild(colType);

    let colPrice = document.createElement('th')
    colPrice.textContent = "Price $"
    row.appendChild(colPrice);

    colId.style.borderStyle = "solid"
    colId.style.borderColor = "#fcf9f9"
    colName.style.borderStyle = "solid"
    colName.style.borderColor = "#fcf9f9"
    colType.style.borderStyle = "solid"
    colType.style.borderColor = "#fcf9f9"
    colPrice.style.borderStyle = "solid"
    colPrice.style.borderColor = "#fcf9f9"

    // render the array with the new elment 
    for (let i = 0; i < foodsArray.length; i++) {

        /*  render the Table */

        let foodItem = document.createElement("tr");

        foods.appendChild(foodItem);

        let foodId = document.createElement("td")
        let foodName = document.createElement("td");
        let foodType = document.createElement("td")
        let foodPrice = document.createElement("td");

        foodItem.appendChild(foodId);
        foodItem.appendChild(foodName);
        foodItem.appendChild(foodType);
        foodItem.appendChild(foodPrice);

        foodId.textContent = foodsArray[i].foodId;
        foodName.textContent = foodsArray[i].foodName;
        foodType.textContent = foodsArray[i].foodType;
        foodPrice.textContent = foodsArray[i].foodPrice;
    }
}
/*****styling *****/
foods.style.justifyContent = "center";
foods.style.margin = "auto"
foods.style.width = "40%"
foods.style.borderStyle = "solid "

foods.style.borderCollapse = "collapse"
foods.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
foods.style.color = "#fcf9f9"

// Get the Form element
let save = document.getElementById('form');
// Add a listener for the Form 
save.addEventListener('submit', handler);

// Handler to collect the data from the user. 
function handler(e) {
    e.preventDefault();

    let id = Food.prototype.foodId(this);
    let name = e.target.name.value;
    let type = e.target.type.value;
    let price = e.target.price.value;
    let food = new Food(id, name, type, price)
    // food.render();

    storeIntoLocalStorage();

    render();
};

function storeIntoLocalStorage() {
    let jsonObjArray = JSON.stringify(foodsArray);
    window.localStorage.setItem("foods", jsonObjArray);
}

function readFromLocalStorage() {
    // read the json Array From LS 
    let jsonArray = window.localStorage.getItem("foods");
    // convert the JSON to JS 
    let objArray = JSON.parse(jsonArray);

    if (objArray == null) {
        console.log("The LS is Empty");
    }
    else {
        for (let i = 0; i < objArray.length; i++) {
            let food = new Food(objArray[i].foodId, objArray[i].foodName, objArray[i].foodType, objArray[i].foodPrice);
            food.foodId = objArray[i].foodId;
        }
    }
}
readFromLocalStorage();


render();

