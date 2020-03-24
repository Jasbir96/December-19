const express = require("express");
const app = express();
// public
app.use(express.static("fair"));
// form input
app.use(express.urlencoded({ extended: true }));
app.post("/api/submit", function(req, res) {
  const { name, email, option, feedback, checkbox } = req.body;
  console.log("name " +name);
  console.log("email " +email);
  console.log("option " +option);
  console.log("feeback " +feedback);
  console.log("checkbox " +checkbox);
  // console.log(`${name} ${email} ${option} ${feedback} ${checkbox}`);
  res.json({ data: "Response accepted" });
});
app.listen(3000, function() {
  console.log("Server has started at port 3000");
});
