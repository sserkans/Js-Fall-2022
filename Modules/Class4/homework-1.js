/**
 * Homework - 1
 * 
 * Due date : Friday (Oct-7) eod
 * 
 * Convert temperature values into different units:
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Extra:
 *      Try to find how to get only 2-digits after the decimal point
 * 
 */

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp1 = 60;
let cTemp1 = ((fTemp1 - 32) / 1.8).toFixed(2);
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);


// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTemp2 = 55;
let kTemp1 = ((fTemp2 + 459.67) * 5/9).toFixed(2);
console.log(`\n${fTemp2}°F is equals to ${kTemp1}°K`);

// C -> F
// T(°F) = T(°C) × 1.8 + 32

let cTemp2 = 34.6;
let fTemp3 = cTemp2 * 1.8 + 32;
console.log(`\n${cTemp2}°C is equals to ${fTemp3}°F`);

// C -> K
// T(K) = T(°C) + 273.15

let cTemp3 = 25;
let kTemp2 = (cTemp3 + 273.15).toFixed(2);
console.log(`\n${cTemp3}°C is equals to ${kTemp2}°K`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67

let kTemp3 = 300;
let fTemp4 = (kTemp3 * 9/5 - 459.67).toFixed(2);
console.log(`\n${kTemp3}°K is equals to ${fTemp4}°F`);

// K -> C
// T(°C) = T(K) - 273.15

let kTemp4 = 290;
let cTemp4 = (kTemp4 -273.15).toFixed(2);
console.log(`\n${kTemp4}°K is equals to ${cTemp4}°C\n`);

