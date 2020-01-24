const axios = require("axios");
module.exports=async function getLocation() {
  const resp = await axios.get("http://ip-api.com/json/");
  const location = res.data.city;
  return location;
}
