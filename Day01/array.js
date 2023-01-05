const restaurant ={
    name : 'Chicken Food',
    location :'Ha Nam, Viet Nam',
    categories : ['Chicken','Pizza','Drink','Vegetables'],
    menu : [' Roasted Chicken ','Boiled chicken','Fruit','Drinks'],

    order: function(starIndex, mainIndex){
        return[this.categories[starIndex],this.menu[mainIndex]];
    }
};

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main,secondary]=[secondary,main];
console.log(main, secondary);

// nhận 2 giá trị trả về từ 1 hàm

// console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter,mainCourse);

//mảng lồng nhau 
const nested = [2,3,[5,6]];
//tách các phần tử trong mảng lồng nhau
const [i, ,[j,k]] = nested
console.log(i,j,k);