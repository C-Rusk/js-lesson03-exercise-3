var chocolate = Number(
  prompt("How many chocolate pieces would you like? Choose 0 to 10.")
);

var leftoverChocolate = 10 - chocolate;

if (leftoverChocolate === 10) {
  alert("You don't like chocolate?");
} else if (leftoverChocolate >= 6) {
  alert(`There are ${leftoverChocolate} pieces of chocolate still left.`);
} else if (leftoverChocolate >= 1) {
  alert(`There's ${leftoverChocolate} pieces of chocolate left. Act fast!`);
} else {
  alert("You went all in!");
}
