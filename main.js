const car = {
    color : "red",
    speed : 200,
    drive : function(){ return "drive" }
};


const shoppingList = [
    "Apple",
    "Orange",
    "Pear"
];

//filter out anything under £100

const items = [
    { name: "Bike",     Price: 100 },
    { name: "TV",       Price: 200 },
    { name: "Album",    price: 10 }, 
    { name: "Book",     price: 5 },
    { name: "Phone",    price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }

]
const filteredItems = items.filter((item) => {
    return item.price <+ 100
})
console.log(filteredItems)

//map array - provided a new array with every item
let itemNames = items.map((item) => {
    return item.name
});
console.log(itemNames)

//find method - helps you to find a single object in an array

const findItem = items.find((item) => {
    return item.name === "Book"
})
console.log(findItem)

//for each - finds the item that matches a specified condition. E.g prints out every price.

items.forEach((item) => {
    console.log(item.price)
});

//sum function return true/false 

const hasExpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasExpensiveItems)

//every method - check if every item in the array is less than 100 - true/false
const expensiveItems = items.every((item) => {
    return item.price <= 100
})
console.log(expensiveItems)

//reduce method - runs a function on every item inside the array

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

//includes method - checks if a specified condition is true/false

const numbers = [1, 2, 50, 70, 100]

const includesTwo = numbers.includes(70)

console.log(includesTwo)
