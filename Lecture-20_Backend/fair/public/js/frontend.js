
// alert("I will go to the client ");
const d = document;

const loginForm = d.querySelector(".login");
const emailBox = d.querySelector(".email");
const passwordBox = d.querySelector(".password");
async function loginHelper(email, password) {
  const backendResponse = await axios.post("/api/users/login", { email, password });
  // console.log(backendResponse);
  if (backendResponse.data.status === "userLogged In") {
    alert("user LoggedIn");
  } else {
    alert("Wrong Email or password");
  }
}
loginForm.addEventListener("submit", function (e) {
  // default behaviour 
  e.preventDefault();
  const email = emailBox.value;
  const password = passwordBox.value;
  loginHelper(email, password);
})


