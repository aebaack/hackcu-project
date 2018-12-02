
userObj = JSON.parse(localStorage.getItem('userObj'));

$(document).ready(() => {
    var date = new Date(userObj.user.created);
  $('#user-name').text(userObj.user.nickname);
  $('#avatar').attr('src', userObj.user.avatar.large);
  $('#steamID').text(userObj.user.steamID);
  $('#accountDate').text(date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());

    $('#friend1').text(userObj.friends[0].name);
    $('#friend2').text(userObj.friends[1].name);
    $('#friend3').text(userObj.friends[2].name);
    $('#friend4').text(userObj.friends[3].name);
    $('#friend5').text(userObj.friends[4].name);
    $('#friend6').text(userObj.friends[5].name);
    $('#friend7').text(userObj.friends[6].name);
    $('#friend8').text(userObj.friends[7].name);

    $('#avatarFriend1').attr('src', userObj.friends[0].avatar);
    $('#avatarFriend2').attr('src', userObj.friends[1].avatar);
    $('#avatarFriend3').attr('src', userObj.friends[2].avatar);
    $('#avatarFriend4').attr('src', userObj.friends[3].avatar);
    $('#avatarFriend5').attr('src', userObj.friends[4].avatar);
    $('#avatarFriend6').attr('src', userObj.friends[5].avatar);
    $('#avatarFriend7').attr('src', userObj.friends[6].avatar);
    $('#avatarFriend8').attr('src', userObj.friends[7].avatar);

    var gameslist = userObj.games.sort((g1, g2) => g2.playTime - g1.playTime);
    gameslist.forEach(g => {
        if (g.playTime < 60) {
            time = `${g.playTime} minutes`
        } else {
            time = `${Math.floor(g.playTime / 60)}H ${g.playTime % 60}M`
        }

        playtime = toString(g.playTime / 60);
        playtime.indexOf('.');

        $('#game-list').append(`<tr class="games"><td>${g.name}<br>${time}</td></tr>`)
    });


    var ctx = document.getElementById("topGameDoughnut").getContext('2d');
    var topGameDoughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [`${gameslist[0].name}`, `${gameslist[1].name}`, `${gameslist[2].name}`, `${gameslist[3].name}`, `${gameslist[4].name}`, `${gameslist[5].name}`, `${gameslist[6].name}`, `${gameslist[7].name}`, `${gameslist[8].name}`, `${gameslist[9].name}`],
            datasets: [{
                label: 'Floored Number of Hours Played',
                data: [Math.floor(gameslist[0].playTime/60), Math.floor(gameslist[1].playTime/60), Math.floor(gameslist[2].playTime/60), Math.floor(gameslist[3].playTime/60), Math.floor(gameslist[4].playTime/60), Math.floor(gameslist[5].playTime/60), Math.floor(gameslist[6].playTime/60), Math.floor(gameslist[7].playTime/60), Math.floor(gameslist[8].playTime/60), Math.floor(gameslist[9].playTime/60)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
                maintainAspectRatio: false
            }]
        }
    });


    var gameslist2 = userObj.games.sort((g1, g2) => g2.playTime2 - g1.playTime2);
    gameslist2.forEach(g => {
        if (g.playTime2 < 60) {
            time = `${g.playTime2} minutes`
        } else {
            time = `${Math.floor(g.playTime2 / 60)}H ${g.playTime2 % 60}M`
        }

        playtime = toString(g.playTime2 / 60);
        playtime.indexOf('.');

        $('#game-list').append(`<tr><td>${g.name}<br>${time}</td></tr>`)
    });


    var ct = document.getElementById("topGame2Doughnut").getContext('2d');
    var topGame2Doughnut = new Chart(ct, {
        type: 'doughnut',
        data: {
            labels: [`${gameslist2[0].name}`, `${gameslist2[1].name}`, `${gameslist2[2].name}`, `${gameslist2[3].name}`, `${gameslist2[4].name}`],
            datasets: [{
                label: 'Floored Number of Hours Played',
                data: [Math.ceil(gameslist2[0].playTime2/60), Math.ceil(gameslist2[1].playTime2/60), Math.ceil(gameslist2[2].playTime2/60), Math.ceil(gameslist2[3].playTime2/60), Math.ceil(gameslist2[4].playTime2/60)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
                maintainAspectRatio: false
            }]
        }
    });

});
