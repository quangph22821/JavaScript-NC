const openHours={
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
  
};

const restaurant ={
    name : 'Chicken Food',
    location :'Ha Nam, Viet Nam',
    categories : ['Chicken','Pizza','Drink','Vegetables'],
    menu : [' Roasted Chicken ','Boiled chicken','Fruit','Drinks'],
    // openHours:{
    //     thu:{
    //         open: 12,
    //         close :22 ,
    //     },

    //     fri:{
    //         open: 11,
    //         close: 23,
    //     },
    //     sat :{
    //         open :0,
    //         close :24,
    //     },
    // },
};

// const rest = new Map();
// rest.set('name','Ha Noi');
// rest.set(1,'Ha Nam, VietNam');
// console.log(rest.set(2,'Kim Bang, Ha Nam'));

// rest
//     .set ('categories',['Chicken','Pizza','Drink','Vegetables'])
//     .set('open',11)
//     .set('close',23)
//     .set(true, 'Chung toi mo cua')
//     .set(false, 'Chúng tôi đóng cửa')

// console.log(rest.get('name'));
// console.log(rest.get(false));
// console.log(rest.get(2))

// const time = 12
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear()

// const arr = [1,2]
// rest.set(arr,'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

const question = new Map([
    ['question','Đâu là ngôn ngữ phổ biến ?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'Correct'],
    [false,'Try again'],
]);

console.log(question);

// Chuyển đổi chuỗi về map
console.log(Object.entries(openHours));
const hoursMap = new Map(Object.entries(openHours));

// Quizz
console.log(question.get('question'));
for(const [key, value] of question){
    if(typeof key === 'number') 
    console.log(`Dap an ${key}: ${value}`);
}

// const answer = Number(prompt('DAP AN:'));
const answer = 3;

console.log(answer);

console.log(question.get(question.get('correct') === answer));

//
console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);