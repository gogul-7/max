const ages = [1, 3, 5, 6, 9, 20, 43, 42, 24, 14, 45, 34];

const canDrink = [];

ages.forEach(function (age) {
  if (age > 20) {
    canDrink.push(age);
  }
});

console.log(canDrink);
