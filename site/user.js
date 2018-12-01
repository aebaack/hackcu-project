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

    var ctx = document.getElementById("topGameDoughnut").getContext('2d');
    var topGameDoughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [`${userObj.games[0].name}`, `${userObj.games[1].name}`, `${userObj.games[2].name}`, `${userObj.games[3].name}`, `${userObj.games[4].name}`],
            datasets: [{
                label: 'Floored Number of Hours Played',
                data: [Math.floor(userObj.games[0].playTime/60), Math.floor(userObj.games[1].playTime/60), Math.floor(userObj.games[2].playTime/60), Math.floor(userObj.games[3].playTime/60), Math.floor(userObj.games[4].playTime/60)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        }
    });



});