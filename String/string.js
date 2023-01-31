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


const airline = 'Máy bay Việt Nam';

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//indexOf tìm vị trí từ trái sang
console.log(airline.indexOf('b'));

//lastIndexOf tìm vị trí từ phải sang
console.log(airline.lastIndexOf('y'));
console.log(airline.indexOf('việt'));

// lấy vị trí thứ 8 đổ đi
console.log(airline.slice(8));

console.log(airline.slice(8, 12));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+ 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// trích xuất các phần tử của chuỗi
// const check =  function(seat){
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'C')
//     console.log('Bạn k may mắn');
//     else
//     console.log('Bạn đã may mắn');
// }
// check('11C');
// check('20E');
// check('3B');


// Sủa lỗi
const nameError = 'qUaNg';
const nameLower = nameError.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect);

// Kiểm tra email



