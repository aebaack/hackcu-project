'use strict';


const SteamAPI = require('steamapi');
const steam = new SteamAPI('23C3817E9A5B7DC2622F180C62A0946A');

function getUserID(steamid) {

  steam.resolve(`https://steamcommunity.com/id/${steamid}`).then(id => {
    console.log(id);
  });

}

function getUserInfo(userid) {

}

getUserID('trailerparkjesus');