var axios = require("axios").default;

var get_tempo = require("./get_tempo");
var get_musics = require("./get_playlist");

module.exports = {
  async Get(req, res) {
    var lat = req.query.lat;
    var lgn = req.query.lon;
    var city = req.query.city;

    if (city) {
      var tempo = await get_tempo.get_name_city(city);
    } else {
      var tempo = await get_tempo.get_coodinate(lat, lgn);
    }
    var temperatura = tempo.temp - 273.15;
    if (tempo.status) {
      var list_music = {};

      if (temperatura > 30) {
        list_music = await get_musics.get("37i9dQZF1DX8mBRYewE6or"); //festa
      } else if (temperatura >= 15 && temperatura <= 30) {
        list_music = await get_musics.get("37i9dQZF1DWVLcZxJO5zyf"); //pop
      } else if (temperatura >= 10 && temperatura <= 14) {
        list_music = await get_musics.get("37i9dQZF1DX8FwnYE6PRvL"); //rock
      } else {
        list_music = await get_musics.get("6dI1MmIBasFV59ritLTxIJ"); //classica
      }

      if (list_music.status) {
        res.status(200).json({
          erro: true,
          musics: list_music.music,
          temperatura: temperatura,
        });
      } else {
        res
          .status(400)
          .json({ erro: true, message: "Erro na consulta de suas musicas" });
      }
    } else {
      res
        .status(400)
        .json({ erro: true, message: "Erro na consulta da temperatura" });
    }
  },
};
