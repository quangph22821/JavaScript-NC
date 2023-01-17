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
        team1:1.5,
        x:3.15,
        team2:6,
    },
};

//1.

for(const[i,player] of game.scored.entries()){
    console.log(`Goal ${i+1} : ${player}`);
} 