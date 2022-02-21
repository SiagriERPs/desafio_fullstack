var axios = require("axios").default;
require("dotenv").config();

module.exports = {
  async get(id) {
    var options = {
      method: "GET",
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      headers: {
        Authorization: `Bearer ${process.env.KEY_SPOTIFT}`,
        "Content-Type": "application/json",
      },
    };

    var Exit;

    await axios
      .request(options)
      .then(function (response) {
        //console.log("Erro: ", response.data);

        var musics = [];

        response.data.items.map((i) => musics.push(i.track.name));
        //console.log("Musics: ", musics);
        Exit = { status: true, music: musics };
      })
      .catch(function (error) {
        console.log("Erro: ", error);
        Exit = { status: false };
      });

    return Exit;
  },
};
