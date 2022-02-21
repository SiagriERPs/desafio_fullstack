var axios = require("axios").default;
require("dotenv").config();

module.exports = {
  async get_coodinate(lat, lgn) {
    var token = await process.env.KEY_WEATHER;
    var options = {
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=${token}`,
    };

    var Exit;

    await axios
      .request(options)
      .then(function (response) {
        console.log("Erro: ", response.data);
        Exit = { status: true, temp: response.data.main.temp };
      })
      .catch(function (error) {
        console.log("Erro: ", error);
        Exit = { status: false };
      });

    return Exit;
  },

  async get_name_city(city) {
    var options = {
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51266135197fe4696715a36a64707393`,
    };

    var Exit;

    await axios
      .request(options)
      .then(function (response) {
        console.log("Erro: ", response.data);
        Exit = { status: true, temp: response.data.main.temp };
      })
      .catch(function (error) {
        console.log("Erro: ", error);
        Exit = { status: false };
      });
    return Exit;
  },
};
