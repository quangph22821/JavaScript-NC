const restaurant ={
    name : 'Chicken Food',
    location :'Ha Nam, Viet Nam',
    categories : ['Chicken','Pizza','Drink','Vegetables'],
    menu : [' Roasted Chicken ','Boiled chicken','Fruit','Drinks'],
    openHours:{
        thu:{
            open: 12,
            close :22 ,
        },

        fri:{
            open: 11,
            close: 23,
        },
        sat :{
            open :0,
            close :24,
        },
    },
    order: function(starIndex, mainIndex){
        return[this.categories[starIndex],this.menu[mainIndex]];
    },

    oderDelivery: function({starIndex,mainIndex,time,address}){
        console.log(`Tôi oder ${this.categories[starIndex]} và 
        ${this.menu[mainIndex]} tại ${address} lúc ${time}
        `);
    },

    
};

restaurant.oderDelivery({
    time: '22:00',
    address :'Ha Noi',
    mainIndex:1,
    starIndex : 1,
});

restaurant.oderDelivery({
    address:'Ha Nam',
    starIndex: 2,
});

//
// const {name, openHours,categories} = restaurant;
// console.log(name, openHours, categories);

// const {menu =[], starterMenu: starters= [] }  =restaurant;
// console.log(menu,starters);

// 
// let a = 111;
// let b = 200;
// const obj = {a:23,b:7,c:14};
// ({a,b}= obj);
// console.log(a,b);

// đối tượng lồng nhau

// const {
//     fri : {open:o, close:c},
// } = openHours;
// console.log(o,c);

// Object
// const newRestaurants = {foundedIn : 1998, ...restaurant, founder: 'Beer'};
// console.log(newRestaurants);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Fish Food';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [fruit, drink, ...otherMenu ] = [
    ...restaurant.menu,
    ...restaurant.categories,
] ;
console.log(fruit, drink, otherMenu);

const {sat, ...weekdays} = restaurant.openHours;
console.log(sat, weekdays);

//2. Functions
const add = function(...number){
    let sum = 0;
    for(let i=0; i<number.length ;i++)
        sum += number[i];
        console.log(sum);
};

add(2,3);
add(1,4,5,6);
add(2,3,4,5,7,89);