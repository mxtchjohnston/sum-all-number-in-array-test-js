function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let elem of array) {
    if (Array.isArray(elem)) {
      sum += sumItems(elem);
      continue;
    }

    sum += elem;
  }

  return sum;
}

module.exports = sumItems;