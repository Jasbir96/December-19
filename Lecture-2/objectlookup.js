var contacts = [
  {
    firstName: "Abhishekh",
    lastName: "Kumar",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];
// INPUT:
function lookUpProfile(FirstName, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == FirstName) {
      // 
      if (contacts[i][prop] != undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such Contact";
}
console.log(lookUpProfile("Abhishekh", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Abhishekh", "address"));