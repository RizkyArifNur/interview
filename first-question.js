function printByParam(x) {
  if (x % 15 === 0) {
    console.log(x, "fish bash");
    return;
  }

  if (x % 3 === 0) {
    console.log(x, "fish");
    return;
  }

  if (x % 5 === 0) {
    console.log(x, "bash");
    return;
  }
  console.log(x);
}

/**
 * looping through 100 sequence
 */
for (let sequence = 0; sequence < 100; sequence++) {
  printByParam(sequence);
}
