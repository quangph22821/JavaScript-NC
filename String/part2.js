// split chia mảng thành các chuỗi con
// join là hàm nối phần tử của mảng thành chuỗi
console.log('quang+teo+2003'.split('+'));
console.log('Hoàng Xuân Quang'.split(' '));

const [firstName, lastName] = 'Hoàng Quang'.split(' ');

const newName = ['Mr.',firstName, lastName].join(' ');
console.log(newName);


const lizeName = function(name){
    const names = name.split(' ');
    const nameUpper = [];
    //push là hàm thêm  phần tử vào mảng
    for(const n of names){
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(nameUpper.join(' '));
};
lizeName('hoàng xuân quang');
lizeName('hoàng xuân quang là tên tôi');

// cách đệm 1 chuỗi
// padStart và padEnd đệm thêm vào chuỗi ở trc và sau
const message = 'Go to gate 23';

console.log(message.padStart(20,'-').padEnd(25,'+'));

const maskCard = function(number){
    const str = number + '';
    const last = str.slice(-2);
    return  last.padStart(str.length,'*');
};

// console.log(maskCard(0392651003));

//Ham lap lai
const  message2 = 'Thời tiết xấu...Tất cả chuyến bay bị hoãn';
console.log(message2.repeat(5));

const plane = function(n){
    console.log(`Có ${n} máy bay ${'2'.repeat(n)}`);

};

plane(5);