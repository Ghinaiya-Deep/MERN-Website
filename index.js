// push() methods
let fruits = ['apple', 'banana'];
fruits.push('orange');  
console.log(fruits);    



// pop() methods
let f = ['apple', 'banana', 'orange', 'mango'];
console.log("Original array:", f); 
let removedFruit = f.pop(); 
console.log("Removed fruit:", removedFruit); 
console.log("Updated array:", f); 



// shift() method
let vegetables = ['carrot', 'broccoli', 'spinach', 'potato'];
console.log("Original array:", vegetables);
let removedVegetable = vegetables.shift();
console.log("Removed vegetable:", removedVegetable); 
console.log("Updated array:", vegetables); 



// unshift() methods
let fruit = ['banana', 'orange', 'mango'];
console.log("Original array:", fruit); 
let newLength = fruit.unshift('apple', 'grape'); 
console.log("New length of array:", newLength); 
console.log("Updated array:", fruit); 



// splice() method
let players = ['virat', 'Dhoni', 'Sharma', 'David'];
console.log("Original players:", players); 
let removedPlayers = players.splice(2, 1);
console.log("Removed player:", removedPlayers[0]); 
console.log("Updated players:", players); 



// slice() method
let player = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log("Original players:", player);
let topPlayers = player.slice(0, 3); 
console.log("Top players:", topPlayers);
console.log("Players after slicing:", player); 



// concat() method
let boardGames = ['Monopoly', 'Settlers of Catan', 'Chess'];
let videoGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
console.log("Board Games:", boardGames);
console.log("Video Games:", videoGames);  
let allGames = boardGames.concat(videoGames);
console.log("All Games:", allGames);



// indexOf() method
let mobileBrand = ['Apple', 'Samsung', 'OnePlus', 'Nokia', 'Samsung', 'Xiaomi'];
console.log("Mobile Brands:", mobileBrand); 
let indexOfSamsung = mobileBrand.indexOf('Samsung');
console.log("First index of 'Samsung':", indexOfSamsung); 



// lastIndexOf() method
let mobileBrands = ['Apple', 'Samsung', 'OnePlus', 'Nokia', 'Samsung', 'Xiaomi'];
console.log("Mobile Brands:", mobileBrands); 
let lastIndexOfSamsung = mobileBrands.lastIndexOf('Samsung');
console.log("Last index of 'Samsung':", lastIndexOfSamsung); 



// find() method
let numbers = [3, 7, 12, 5, 18, 9, 20];
console.log("Original numbers:", numbers);
let firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First number greater than 10:", firstGreaterThanTen); 



// filter() method
let keyboards = ['Mechanical', 'Membrane', 'Mechanical', 'Wireless', 'Membrane', 'Gaming', 'Mechanical'];
console.log("Original keyboard types:", keyboards); 
let mechanicalKeyboards = keyboards.filter(keyboard => keyboard === 'Mechanical');
console.log("Filtered mechanical keyboards:", mechanicalKeyboards); 



// map() method
let num = [1, 2, 3, 4, 5];
console.log("Original numbers:", num); 
let squaredNumbers = num.map(num => num * num);
console.log("Squared numbers:", squaredNumbers); 



// reduce() method
let nu = [1, 2, 3, 4, 5];
console.log("Original numbers:", nu);
let totalSum = nu.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total sum:", totalSum);
