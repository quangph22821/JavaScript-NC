const game = {
    team1 : 'Manchester City',
    team2 : 'Bayern Munich',
    players:[
        [
            'Ederson',
            'Akanji',
            'Dias',
            'Cancelo',
            'Walker',
            'Rodri',
            'Kevin De Bruyne',
            'Silva',
            'Foden',
            'Grealish',
            'Haaland',
        ],

        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ]
    ] ,

    score: '4:0',
    scored :['Haaland','Kevin De Bruyne','Foden','Mahrez'],
    date : 'Dec 9th, 2030',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};

//1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')

const [players1 ,players2] = game.players;
console.log(players1,players2);

// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players


// toán tử sperad
const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

//3.. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const  players1Final = [...players1, 'Mahrez','Aké','Gundogan'];
console.log(players1Final);

//5 

const {odds:{team1 , x:draw,team2},}= game;
console.log(team1, draw, team2);

//6.

const printGoals = function(...players){
    console.log(`Có  ${players.length} cầu thủ đã ghi bàn là:`);
    console.log(players);
   

}

printGoals(...game.scored);

//7.

team1 < team2 && console.log('Manchester City dành chiến thắng');
team1 > team2 && console.log('Bayern Munich dành chiến thắng');