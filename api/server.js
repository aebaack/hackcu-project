'use strict';

var express = require('express');
var fs = require('fs');

const SteamAPI = require('steamapi');
const steam = new SteamAPI('23C3817E9A5B7DC2622F180C62A0946A');



var app = express();

function getUserID(steamid) {

  steam.resolve(`https://steamcommunity.com/id/${steamid}`).then(id => {
    console.log(id);
    return id
  });

}

function getUserInfo(userid) {
  
}

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

app.get('/',function(req,res){
  getUserID('trailerparkjesus');
  
  res.send(id);
})
//getUserID('trailerparkjesus');

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})