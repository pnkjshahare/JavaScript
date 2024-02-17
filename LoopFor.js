const array = [10, 20, 30, 40, 50, "pankaj", "shahare"];
for (let index = 0; index < array.length; index++) {
  console.log(` ${array[index]} `);
}

// +++++++ table print +++++++++++++
for (let i = 1; i <= 10; i++) {
  if (i == 9) {
    continue;
  }
  if (i == 9) {
    break;
  }
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j}=${i * j}`);
  }
  
}
