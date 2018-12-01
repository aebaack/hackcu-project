userObj = JSON.parse(localStorage.getItem('userObj'));

$(document).ready(() => {
  $('#user-name').text(userObj.user.nickname);
  $('#avatar').attr('src', userObj.user.avatar.large);
  $('#steamID').text(userObj.user.steamID);
  $('#accountDate').text(userObj.user.created);

  userObj.games.sort((g1, g2) => g2.playTime - g1.playTime);
  userObj.games.forEach(g => {
    if (g.playTime < 60) {
      time = `${g.playTime} minutes`
    } else {
      time = `${Math.floor(g.playTime / 60)}H ${g.playTime % 60}M`
    }

    playtime = toString(g.playTime / 60);
    playtime.indexOf('.');

    $('#game-list').append(`<tr><td>${g.name}<br>${time}</td></tr>`)
  });
});