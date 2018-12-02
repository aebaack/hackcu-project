'use strict';

var fs = require('fs');

const SteamAPI = require('steamapi');
const steam = new SteamAPI('23C3817E9A5B7DC2622F180C62A0946A');
const axios = require('axios');

const express = require('express');
const app = express();

app.use(express.static('site'))
//app.use(express.static('api'))

// localhost:8080/user/76561198070079101

function getTopGames(data){
  var names = ['','','','','','','','','',''];
  var maxPlaytime = [0,0,0,0,0,0,0,0,0,0];
  var maxGames = {}
  for(var i = 0; i < data[1].length; i++){
    var index = maxPlaytime.indexOf(Math.min.apply(null,maxPlaytime))
    if(data[1][i]['playTime'] > Math.min.apply(null,maxPlaytime)){
      maxPlaytime[index] = data[1][i]['playTime'];
      names[index] = data[1][i]['name'];
    }
  }
  //sorted = maxPlaytime.sort()
  for(var i = 0; i < maxPlaytime.length; i++){
    maxGames[names[i]] = maxPlaytime[i];
  }
  return maxGames
}

/*
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options
});
*/

app.get('/user/:user', (req, res) => {

  steam.resolve(`https://steamcommunity.com/id/${req.params.user}`)
    .then(userid => {


      const friends = new Promise((resolve, reject) => {
        steam.getUserFriends(userid)
          .then(friendsList => {

            let counter = 0;

            const retFriend = {};

            friendsList.forEach(f => {
              
              steam.getUserSummary(f.steamID)
                  .then(sum => {
                    retFriend[f.steamID] = {
                      name: sum.nickname
                    }

                    if (++counter == 5) {
                      resolve(retFriend);
                    }
                  });
                })
                .catch(e => console.log(e));
            });
        });
      });

      const userInfo = Promise.all([steam.getUserSummary(userid),
        steam.getUserOwnedGames(userid),
        //axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=23C3817E9A5B7DC2622F180C62A0946A&steamid=${userid}&format=json`),
        steam.getUserFriends(userid)]);

      // Return data
      userInfo.then(user => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Content-Type", "application/json");
        
        Promise.all(user[2].slice(0, 8).map(f => steam.getUserSummary(f.steamID)))
        .then(friendList => {
          friendList.forEach((f, i) => {
            user[2][i].name = f.nickname;
            user[2][i].avatar = f.avatar.medium;
          });

          res.send(
            //getTopGames(user)
            {
            'user': user[0],
            'games': user[1],
            'friends': user[2]
            }
          );
        });
      })
    })
})

app.get('/',function(req,res){
  res.send('./site/index.html')
})
  
const server = app.listen(process.env.PORT || 8080, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})