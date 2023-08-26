const items = new Map([
["laptop",523],
["projector",896],
["camera",823],
]);
items.set("mouse",658);
console.log(items.get("mouse"));

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