// Set là object cho phép lưu trữ dữ liệu k trùng lặp
// k lấy đc ra thứ tự mảng như 1 2
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
};


const ordersSet = new Set([
    'Mì',
    'Bánh mì',
    'Mì',
    'Bánh ngọt',
    'Kẹo',
]);

console.log(ordersSet);

console.log(ordersSet.size);

console.log(ordersSet.has('Bánh mì'));
console.log(ordersSet.has('Gạo'));

ordersSet.add('Cơm');
ordersSet.add('Cơm');

ordersSet.delete('Bánh mì');
console.log(ordersSet);

for(const order of ordersSet) 

console.log(order) ;

// Ví dụ
const staff = ['Phụ bếp','Đầu bếp','Bưng bê','Bưng bê','Phụ bếp'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(new Set('Hoàng Xuân Quang').size);