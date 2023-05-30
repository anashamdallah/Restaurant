'use strict'
function Food (name, type, price){
    this.foodId = 0;
    this.foodName= name;
    this.foodType= type;
    this.foodPrice= price ;
}

Food.prototype.foodId = function(){
    let min = 1000;
    let max = 1099;
    const id = Math.floor(Math.random() * (max - min) ) + min;
   return id;
}
let food = document.getElementById('foods');

    let row=document.createElement('tr')
    food.appendChild(row);

    let colId = document.createElement('th')
    colId.textContent="ID"
    row.appendChild(colId);

    let colName = document.createElement('th')
    colName.textContent="Name"
    row.appendChild(colName);

    let colType = document.createElement('th')
    colType.textContent="Type"
    row.appendChild(colType);

    let colPrice = document.createElement('th')
    colPrice.textContent="Price $"
    row.appendChild(colPrice);
    
    
Food.prototype.render = function(){
    let newRow=document.createElement('tr')
    food.appendChild(newRow);

    let foodId=document.createElement('td')
    foodId.textContent=Food.prototype.foodId(this);;
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
    foodId.style.borderStyle=" solid "
    foodId.style.borderColor="#fcf9f9"
    foodName.style.borderStyle="solid "
    foodName.style.borderColor="#fcf9f9"
    foodType.style.borderStyle="solid "
    foodType.style.borderColor="#fcf9f9"
    foodPrice.style.borderStyle="solid "
    foodPrice.style.borderColor="#fcf9f9"
}

function handler (e){
    e.preventDefault();

    let id = Food.prototype.foodId(this);
    let name = e.target.name.value;
    let type = e.target.type.value;
    let price= e.target.price.value;
    let food = new Food( name, type, price)
    food.render();
}

let save = document.getElementById('form');
save.addEventListener('submit', handler)

/*****styling *****/
food.style.justifyContent = "center";
food.style.margin="auto"
food.style.width ="40%"
food.style.borderStyle = "solid "
colId.style.borderStyle="solid"
colId.style.borderColor="#fcf9f9"
colName.style.borderStyle="solid"
colName.style.borderColor="#fcf9f9"
colType.style.borderStyle="solid"
colType.style.borderColor="#fcf9f9"
colPrice.style.borderStyle="solid"
colPrice.style.borderColor="#fcf9f9"
food.style.borderCollapse="collapse"
food.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
food.style.color="#fcf9f9"