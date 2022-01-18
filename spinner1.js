const arr = ["|", "/", "-", "\\", "|"];

const spin = (arr, delay) => {
  arr.push("\n");
  for (const index of arr) {
    setTimeout(() => {
      process.stdout.write(`\r${index}`);
    }, delay);
    delay += 200;
  };
};

spin(arr, 100);