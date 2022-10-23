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

function addNumbers (x,y){
    return x+y
}

console.log(addNumbers(3,4))

function reversedString(userInputString) {
    let newString = "";
    for (var i = userInputString.length - 1; i >= 0; i--) {
        newString += userInputString[i];
    }
    return newString;
}
console.log(reversedString('hell'))


function abbrSentence (stringGiven) {
    let abbr = '';
    let strtoArr = stringGiven.split(' ');
 for ( i=0; i < strtoArr.length ; i++){
    let char = strtoArr[i].substring(0,1);
    abbr += char.toUpperCase();
 }
 return abbr;
}

console.log(abbrSentence('hello dear, how are you doing?'));