let newArr = ['sunny', 'rainy', 'cloudy', 'windy', 'snow'];
let weatherType = '';

for ( let i = 1; i <= 5 ; i++ ){
    weatherType = newArr[i-1];
    switch(weatherType){
        case 'sunny':
            console.log(`Day ${i} ---> show sun icon`);
            break;
        case 'rainy':
            console.log(`Day ${i} ---> show rain icon`);
            break;
        case 'cloudy':
            console.log(`Day ${i} ---> show cloud icon`);
            break;
        case 'windy':
            console.log(`Day ${i} ---> show wind icon`);
            break;
        default:
            console.log(`Day ${i} ---> show snow icon`);
    }
}

let favSports = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

// find the index of First occurrence of 'BaseBall' (ignoring cases)

let indexAns = 0;
for ( i=0 ; i < favSports.length; i++){
   
    do {favSports[i].toLowerCase().localeCompare('baseball') === 0
        indexAns = i 
        indexAns++   
    } while (indexAns < 2);
       
}
console.log(indexAns);
