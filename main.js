$(document).ready(initializeApp);


var the_number = null;
var counter = 1;
function pick_number () {
  var random_number = Math.floor((Math.random() * 10) + 1);
  console.log(random_number);
  return random_number;
}
function initializeApp () {
  studentHighScore();
  the_number = pick_number();
  $("button").click(make_guess);

  var yourName = '';
  function make_guess() {
    var the_guess = $("#guess_input").val();
    console.log(the_guess);
    if (the_guess > the_number) {
      $("#response_div").text("Too High!");
    } else if (the_guess < the_number) {
      $("#response_div").text("Too Low!");
    } else {
      $("#response_div").text("You guessed it!");


      yourName = prompt("Enter your name: ");
      addHighScore(yourName, counter);
      studentHighScore();
    }
    counter++;
  }
}
function addHighScore(name, score) {
  $.ajax({
    url: 'http://localhost:3001/addscore',
    method: 'get',
    dataType: 'json',
    data: {
      name: name,
      score: score
    },
    success: function (response) {
      console.log("worked! ", response);
    },
    error: function (response) {
      console.log('ruh roh add highscore failed', response);
    }
  });
}
function studentHighScore() {
  $.ajax({
    url: 'http://localhost:3001/scores',
    method: 'get',
    dataType: 'json',
    success: function (response) {
      console.log("success", response);
      $(".tableArea").empty();
      var scoreTable = $("<table>");
      var headerRow = $("<tr>");
      var nameHeader = $("<th>");
      var scoreHeader = $("<th>");
      nameHeader.text("Name");
      scoreHeader.text("Score");
      headerRow.append(nameHeader, scoreHeader);
      scoreTable.append(headerRow);
      for( var index = 0; index < response.length; index++){
        var highscoreRow = $("<tr>");
        var highscoreName = $("<td>")
        highscoreName.text(response[index].name);
        var scoreData = $("<td>");
        scoreData.text(response[index].score);
        highscoreRow.append(highscoreName, scoreData);
        scoreTable.append(highscoreRow);
        $(".tableArea").append(scoreTable);
      }
    },
    error: function (response) {
      console.log('ruh roh', response);
    }
  });
}
