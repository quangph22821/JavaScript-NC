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
}

const menu = [...restaurant.menu,...restaurant.categories];

for(const item of menu ) console.log(item);

for(const [i,el]of menu.entries() ){
    console.log(`${i+1} : ${el}`);
} 
