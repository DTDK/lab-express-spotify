console.log('sup');

var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = 'de05d80b9f2540d4a0d51f5344718aee',
  clientSecret = '8dbcbab7f3ef4fa2be5298278f4cf9c3';

var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function (data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  });