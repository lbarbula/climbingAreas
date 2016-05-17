class climbingArea {
  constructor(name, west, north){
    this.name = name;
    this.west = west;
    this.north = north;
  }
}
const vedauwoo = new climbingArea("Stuff", 43.02, -98.03);
console.log(vedauwoo)
console.log(vedauwoo.name)
$('#class').append(vedauwoo.name);
