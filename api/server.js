'use strict';


const SteamAPI = require('steamapi');
const steam = new SteamAPI('23C3817E9A5B7DC2622F180C62A0946A');
var express = require('express');
var app = express();

function getUserID(steamid) {

  steam.resolve(`https://steamcommunity.com/id/${steamid}`).then(id => {
    console.log(id);
    return id
  });

}

function getUserInfo(userid) {

}

app.get('/',function(req,res){
  var id = getUserID('trailerparkjesus');
  res.send(id);
})
//getUserID('trailerparkjesus');

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})