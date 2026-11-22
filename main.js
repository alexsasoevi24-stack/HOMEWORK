let players = ["ნიკა", "ანი", "გიო", "მარიამი", "ლუკა", "ელენე"];
let points = [120, 340, 95, 410, 260, 180];

const addBonus = (p) => p + 50;
const isWinner = (p) => p >= 300;

console.log(addBonus(120));
console.log(isWinner(340));
console.log(isWinner(95));

players.forEach((player, i) => {
  console.log(i + 1 + ". " + player + " — " + points[i] + " ქულა");
});

let doubled = points.map((p) => p * 2);
let badges = players.map((name) => "🎮 " + name);

console.log(doubled);
console.log(badges);
console.log(points);

let filteredPoints = points.filter((p) => p >= 200);
let foundPoint = points.find((p) => p >= 400);
let foundIndex = points.findIndex((p) => p >= 400);
let champion = players[foundIndex];

console.log(filteredPoints);
console.log(foundPoint);
console.log(foundIndex);
console.log("🏆 ჩემპიონი: " + champion);

let hasLessThan100 = points.some((p) => p < 100);
let allAbove50 = points.every((p) => p >= 50);
let allAbove100 = points.every((p) => p >= 100);

console.log("ვინმე 100-ზე ქვემოთაა: " + hasLessThan100);
console.log("ყველას აქვს მინიმუმ 50: " + allAbove50);
console.log("ყველას აქვს მინიმუმ 100: " + allAbove100);

let sortedPointsDesc = [...points].sort((a, b) => b - a);
let top3Points = sortedPointsDesc.slice(0, 3);
let sortedPlayers = [...players].sort();

console.log(sortedPointsDesc);
console.log(top3Points);
console.log(sortedPlayers);
console.log(points);
console.log(players);

const total = (...nums) => {
  let sum = 0;
  nums.forEach((n) => (sum += n));
  return sum;
};

console.log(total(10, 20, 30));
console.log(total(...points));
console.log(Math.max(...points));
