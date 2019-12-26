var arr = [121, 1, 132, 122, 111, 100, 2, 4, 5];
function compartor(x, y) {
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else if (x == y) {
    return 0;
  }
}

console.log(arr.sort(compartor));

console.log(arr);
