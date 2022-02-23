var axios = require("axios").default;
require("dotenv").config();

module.exports = {
  async get(id) {
    var token = await getToken();
    console.log("CCC::", token);
    var options = {
      method: "GET",
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    var Exit;

    await axios
      .request(options)
      .then(function (response) {
        //console.log("Erro: ", response.data);

        var musics = [];

        response.data.items.map((i) =>
          musics.push({
            name: i.track.name,
            image: i.track.album.images[0].url,
          })
        );
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

async function getToken() {
  var Exit = "";

  var form = { grant_type: "client_credentials" };

  const data = Object.keys(form)
    .map((key, index) => `${key}=${encodeURIComponent(form[key])}`)
    .join("&");

  var options = {
    method: "POST",
    url: `https://accounts.spotify.com/api/token`,
    headers: {
      Authorization: `Basic MzA5YWY2Y2Q3NWE2NDBmYjlmMDU0NTQ0MWIwZDc1ODY6NjU2MmE5N2Q3NDYzNGVmZWExM2VmMzcyZmEyYmM1ODM=`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  };

  await axios
    .request(options)
    .then(function (response) {
      Exit = response.data.access_token;
    })
    .catch(function (error) {
      console.log(error);
      Exit = 0;
    });

  return Exit;
}
