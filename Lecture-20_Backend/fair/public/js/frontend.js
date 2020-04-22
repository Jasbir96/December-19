
// alert("I will go to the client ");
const d = document;

const loginForm = d.querySelector(".login");
const emailBox = d.querySelector(".email");
const passwordBox = d.querySelector(".password");
const logout = d.querySelector(".logout");

async function loginHelper(email, password) {
  const backendResponse = await axios.post("/api/users/login", { email, password });
  if (backendResponse.data.status === "userLogged In") {
    alert("user LoggedIn");
    //  frontent browser
    location.assign("/profile");
  } else {
    alert("Wrong Email or password");
  }
}

async function logoutHelper() {
  const backendResponse = await axios.get("/logout");
  if (backendResponse.data.status == "user LoggedOut") {
    // wrong token 
    location.reload();
  } else {
    alert("logout failed");
  }
}



if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    // default behaviour 
    e.preventDefault();
    const email = emailBox.value;
    const password = passwordBox.value;
    loginHelper(email, password);
  })
}

if (logout) {
  logout.addEventListener("click", function () {
    logoutHelper();
  })
}


