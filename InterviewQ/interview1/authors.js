let myarray = [
  { author: 'sachin', book: 'cricket' },
  { author: 'modi', book: 'politics' },
  { author: 'salman', book: 'acting' }
];
let cricketArray = [];
let politicsArray = [];
let actingArray = [];

for (let obj of myarray) {
  switch (obj.book) {
    case 'cricket':
      cricketArray.push(obj);
      break;
    case 'politics':
      politicsArray.push(obj);
      break;
    case 'acting':
      actingArray.push(obj);
      break;
    
  }
}

console.log(cricketArray);
console.log(politicsArray);
console.log(actingArray)