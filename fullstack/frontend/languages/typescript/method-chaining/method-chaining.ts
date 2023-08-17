class Human {
  eyes: String;
  nose: String;
  witheyes() {
    console.log("see");
    return this;
  }
  withnose() {
    console.log("breath");
  }
}
let vishnu = new Human();
vishnu.witheyes().withnose();
