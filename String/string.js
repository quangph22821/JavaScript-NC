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
// console.log(airline.slice(8));

// console.log(airline.slice(8, 12));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+ 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

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
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

// trim() xóa khoảng trắng
// const lowerEmail = loginEmail.toLowerCase();
// const trimEmail = loginEmail.trim();

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);


// replace() dùng thay thế tromng chuỗi
const price = '200,000VND';
const priceUS = price.replace('VND','USD').replace(',','.');
console.log(priceUS);

const announcement = 'Toi co nhieu thu co rat it tien';
//tìm thấy và thay đổi kí tự đầu tiên
console.log(announcement.replace('co','khong'));
//tìm thấy và thay đổi tất cả giống nhau
console.log(announcement.replace(/co/g,'khong'));

// kiểm tra đúng sai của chuỗi
const planeVn = 'Airbus A320neo';

//includes kiểm tra bắt chuỗi ở mọi chỗ
console.log(planeVn.includes('A320'));
console.log(planeVn.includes('Boeing'));

//startWith kiểm tra bắt chuỗi ở đầu chuỗi
console.log(planeVn.startsWith('Air'));

if(planeVn.startsWith('Airbus') && planeVn.endsWith('neo')){
    console.log('Đây là xe buýt đời mới');
}

//
const checkBag = function (item) {
    const bag = item.toLowerCase();
    if(bag.includes('dao') || bag.includes('súng')){
        console.log('Bạn không được lên máy bay');
    }else{
        console.log('Mời bạn lên máy bay');
    }
    
}
checkBag('Tôi có một con dao , một chiếc laptop và một chút đồ ăn');
checkBag('Quả bóng và đôi giày');
checkBag('1 túi bim bim và 1 khẩu súng');