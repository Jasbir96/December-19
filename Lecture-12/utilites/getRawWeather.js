const axios = require("axios");
module.exports=async function getRawLocation(location) {
  const response=await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
  const woeid=response.data[0]["woeid"];
  const weather=await axios.get(`https://www.metaweather.com/api/location/${woeid}`);
  
  return weather.data["consolidated_weather"];
// make another request using location method and get five days weather
}

