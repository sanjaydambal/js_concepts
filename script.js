const items = new Map([
["laptop",523],
["projector",896],
["camera",823],
]);
items.set("mouse",658);
console.log(items.get("mouse"));
items.delete("laptop");
console.log(items)
console.log(items.has("laptop"))

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
   for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); 
  }
    for (let amount of recipeMap.values()) {
    console.log(amount) ; 
  }
    for (let entry of recipeMap) { 
    console.log(entry); 
  }
const players = new Map([['key','value'],['small','medium'],['fruit','another']]);

for(const player of players.values()){
  console.log(player);
}
for(const player of players.keys()){
    console.log(player);
  }
  for(const player of players.entries()){
    console.log(player);
  }
 
  
//  set
const students = new Set(["Praveen","Vinod","sudhir","praveen"])
console.log(students);
students.add("sindhu");
console.log(students);
students.delete("Vinod") 
console.log(students);
console.log(students.has("sindhu"));
for(const names of students.entries()){
    console.log(names)
}
const numbers = [1,2,4,1,6,8,2,5,9,2,0,9,7,6,3,4,6,7,8,4,2,1,5,8,9,0,2,4,5,3,2,6,8,9,6];

const numbers1 = new Set(numbers);
console.log(numbers1); 