'use strict';

var fs = require('fs');

const SteamAPI = require('steamapi');
const steam = new SteamAPI('23C3817E9A5B7DC2622F180C62A0946A');

const express = require('express');
const app = express();

// localhost:8080/user/76561198070079101

function getTopGames(data){
  var maxGames = [];
  var maxPlaytime = [0,0,0,0,0,0,0,0,0,0];
  for(var i = 0; i < data['games'].length; i++){
    if(data['games']['playTime'] > Math.min(maxPlaytime)){
      maxPlayTime[maxPlaytime.indexOf(Math.min(maxPlaytime))] = data['games']['playTime'];
    }
  }
  return maxPlaytime.sort()
}

app.get('/user/:user', (req, res) => {

  steam.resolve(`https://steamcommunity.com/id/${req.params.user}`)
    .then(userid => {

      const userInfo = Promise.all([steam.getUserSummary(userid),
        steam.getUserOwnedGames(userid),
        steam.getUserFriends(userid)]);

      // Return data
      userInfo.then(user => {
        res.send({
          'user': user[0],
          'games': user[1],
          'friends': user[2]
        });
      })
    })
})
  
const server = app.listen(8080, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})