const getLocation = require("../utilites/getLocation");
const getWeather = require("../utilites/getRawWeather");
const axios = require("axios");
module.exports = async function(location) {
  
  const city = location || (await getLocation());
  const weather = await getWeather(city);
  const temp = Math.floor(weather[0]["the_temp"]);
  // Math.floor(temp);
  const state = weather[0]["weather_state_name"];
  console.log(`Current Condition in ${city}
        ${temp} ${state}`)
};
