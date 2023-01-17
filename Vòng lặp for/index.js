const weekdays= ['mon','tue','wed','thu','fri','sat','sun'];

const openHours={
    
    [weekdays[3]]:{
        open: 12,
        close :22 ,
    },

    [weekdays[2]]:{
        open: 11,
        close: 23,
    },
    [weekdays[5]] :{
        open :10,
        close :12+10,
    },
};

const restaurant ={
    name : 'Chicken Food',
    location :'Ha Nam, Viet Nam',
    categories : ['Chicken','Pizza','Drink','Vegetables'],
    menu : [' Roasted Chicken ','Boiled chicken','Fruit','Drinks'],
 
    openHours,
    order: function(starIndex, mainIndex){
            return[this.categories[starIndex],this.menu[mainIndex]];
        },
    
        oderDelivery: function({starIndex,mainIndex,time,address}){
            console.log(`Tôi oder ${this.categories[starIndex]} và 
            ${this.menu[mainIndex]} tại ${address} lúc ${time}
            `);
        },
        
        oderChiken: function(mainIngredient,...otherIngredient){
            console.log(mainIngredient);
            console.log(otherIngredient);
        }
};

// const menu = [...restaurant.menu,...restaurant.categories];

// for(const item of menu ) console.log(item);

// for(const [i,el]of menu.entries() ){
//     console.log(`${i+1} : ${el}`);
// } 

// if(restaurant.openHours && restaurant.openHours.mon)
// console.log(restaurant.openHours.mom.open);

// toán tử chuỗi
// console.log(restaurant.openHours.mon?.open);
// console.log(restaurant.openHours?.mon?.open);


// const days =['mon','tue','wed','thu','fri','sat','sun'];
// for(const day of days){
//     console.log(day);
//     const open = restaurant.openHours[day]?.open ?? 'đóng cửa';
//     console.log(`Thứ ${day}, open at ${open}`);
// }


// const users =[
    
//     {name:' Quang',
//     email: 'quanghxph22821@fpt.edu.vn'}
// ]
// // const users = [];  

// console.log(users[0]?.name ?? 'Không tồn tai');


const properties = Object.keys(openHours);
console.log(properties);

let open = `Chúng tôi mở cửa ${properties.length} ngày :`;

for (const day of properties){
    open += `${day};`
}
console.log(open);

// 
const value = Object.values(openHours);
console.log(value);

//
const entrie =  Object.entries(openHours);

for(const [key , {open, close }] of entrie){
    console.log(`Thứ ${key} chúng tôi mở của lúc ${open}h và đóng cửa lúc ${close}h`);
}