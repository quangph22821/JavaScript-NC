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
    // order: function(starIndex, mainIndex){
    //     return[this.categories[starIndex],this.menu[mainIndex]];
    // },

    // oderDelivery: function({starIndex,mainIndex,time,address}){
    //     console.log(`Tôi oder ${this.categories[starIndex]} và 
    //     ${this.menu[mainIndex]} tại ${address} lúc ${time}
    //     `);
    // },
    
    // oderChiken: function(mainIngredient,...otherIngredient){
    //     console.log(mainIngredient);
    //     console.log(otherIngredient);
    // }
    
};

// restaurant.oderDelivery({
//     time: '22:00',
//     address :'Ha Noi',
//     mainIndex:1,
//     starIndex : 1,
// });

// restaurant.oderDelivery({
//     address:'Ha Nam',
//     starIndex: 2,
// });
// ----------1 Toán tử OR------------
// toán tử trả về 1 giá trị trung thực đứng đầu
// console.log('Quang' || 3);


// console.log('' || 'Quang');
// console.log(true || 0);
// console.log(undefined || null); 

/*
    KHÔNG HOẠT ĐỘNG KHI BIẾN BẰNG 0
    ?: kiểm tra xem tồn tại k
    nếu tồn tại trả về đúng nếu k trả về 10
*/ 
// restaurant.numGuests = 0; 
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 15;
// console.log(guests2);


//-------------2. Toán tử AND-------------
// Toán tử AND đêù đúng khi tất cả các toán hạng đều đúng
// chỉ cần 1 hoạt động true là trả về kq sai đó
// console.log('------AND-----');
// console.log(0 && 'Quang');
// console.log(7 && 'quang');

// console.log('Hello' && 23 && null && 'Quang');

// if(restaurant.oderChiken){
//     restaurant.oderChiken('Food','Drink and COCA');
// }

// restaurant.oderChiken && restaurant.oderChiken('Fanta','CoCa','Sprite');
/////////////////////////////////////////////////////////
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 15;
// console.log(guests2);

// // Toán tử kết hợp : null and undefined (k nhận 0 và chuỗi rỗng)
// const guestCorrect = restaurant.numGuests ?? 0;
// console.log(guestCorrect);

// Toán tử logic gán 1 biến cho 1 biến
// nếu sai sẽ hiện giá trị gán

const rest1 = {
    name : 'Ha Nam',
    numGest : 0,
}

const rest2 = {
    name : 'Ha Noi',
    owner : 'Le Ho',
}

// rest1.numGest ||= 10;
// rest2.numGest ||= 10;

// rest1.numGest ??= 10;
// rest2.numGest ??= 10;
// rest2.owner = rest2.owner && '<QUANG>';

rest1.owner &&='QUANG';
rest2.owner &&='QUANG';

console.log(rest1);
console.log(rest2);
