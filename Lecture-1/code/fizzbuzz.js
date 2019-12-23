var print = console.log;
var variable = 20;
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    print("Fizz Buzz");
  } else if (i % 5 == 0) {
    print("Buzz");
  } else if (i%3==0) {
    print("Fizz ");
  } else {
    print(i);
  }
}
