interface Ihuman {
  [key: string]: any;
}
let human: Ihuman = { eyes: 2, ears: 2 };
console.log(human);
human.hands = "two";
human.legs = "two";

// interface Ihuman {
//   eyes: number;
//   hands?: string;
//   legs?: string;
// }
// let human: Ihuman = { eyes: 2, ears: 2 };
// console.log(human);
// human.hands = "two";
// human.legs = "two";
