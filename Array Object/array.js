const restaurant ={
    name : 'Chicken Food',
    location :'Ha Nam, Viet Nam',
    categories : ['Chicken','Pizza','Drink','Vegetables'],
    menu : [' Roasted Chicken ','Boiled chicken','Fruit','Drinks'],

    order: function(starIndex, mainIndex){
        return[this.categories[starIndex],this.menu[mainIndex]];
    },

    orderChicken : function(ing1, ing2,ing3){
        console.log(`Tôi muốn gọi ${ing1} , ${ing2},${ing3}`);
    }
};

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main,secondary]=[secondary,main];
// console.log(main, secondary);

// // nhận 2 giá trị trả về từ 1 hàm

// // console.log(restaurant.order(2,0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter,mainCourse);

// //mảng lồng nhau 
// const nested = [2,3,[5,6]];
// //tách các phần tử trong mảng lồng nhau
// const [i, ,[j,k]] = nested
// console.log(i,j,k);

const arr = [5,6,7];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [2,4,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.menu,'Fish'];
console.log(newMenu);

// sao chép mảng
const coppyMenu = [...restaurant.menu];

// Join 2 mảng
const menuC =[...restaurant.menu, ...restaurant.categories];
console.log(menuC);

//
const str = 'Quang'
const letters = [...str,'','Q.'];
console.log(letters);

/* Note:
    - Nhiều giá trị phân tách bằng dấu phẩy thường chỉ đc sd khi
    chuyển các đối số vào 1 hàm hoặc khi xd 1 mảng mới
*/

const ingredients = [
    prompt("Nhập 1:"),
    prompt("Nhập 2:"),
    prompt("Nhập 3:"),
];

console.log(ingredients);

//
restaurant.orderChicken(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderChicken(...ingredients);