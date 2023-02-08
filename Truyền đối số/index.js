// const flight = 'LH123';

// const quang = {
//     name:'Hoàng Xuân Quang',
//     passport: 18022003,
// };

// const check = function(flightNum,passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Name :' + passenger.name;

//     if(passenger.passport === 18022003){
//         alert('Thành công');
//     }else{
//         alert('Không thành công');
//     }
// };

// // check (flight, quang);
// // console.log(flight);
// // console.log(quang);

// // //
// // const flightNum = flight;
// // const passenger = quang;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*100000000000);
// };

// newPassport(quang);
// check(flight,quang);



//--------------------//

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
};

const upper = function(str){
    const[first, ...other] = str.split(' ');
    return[first.toUpperCase(), ...other].join(' ');
};

//
const tranformer = function(str, fn){
    console.log(`Hoàng Xuân Quang :${str}`);
    console.log(`Hoàng Xuân Quang : ${fn(str)}`);

    console.log(`Quang by:${fn.name}`);
};

tranformer('JavaScripts là ngôn ngữ tốt',upper);

//gọi lại hàm mọi lúc

const hight5 = function(){
    console.log('Quang');
};
document.body.addEventListener('click',hight5);

['1','2','3'].forEach(hight5);

//Hàm trả về hàm//
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greetHey = greet('Hey');
greetHey('Quang');
greetHey('Tèo');

greet ('Quang')('Tèo');

//Changllenge
const greetArr = greeting => name =>console.log(`${greeting} ${name}`);
greetArr ('Hi')('Tèo');




//Biểu thức hàm
const run = function(){
    console.log('Tôi thi chạy');
}
run();

(function(){
    console.log('Tôi thi chạy');
}) ();









