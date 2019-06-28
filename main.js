$(document).ready(initializeApp); // This line is defining a function that will run once the HTML document loads.

var the_number = null;
function pick_number () {
  var random_number = Math.floor((Math.random() * 10) + 1);
  console.log(random_number);
  return random_number;
}
function initializeApp () {
//this is where you need to place the function call for your random number generator function.
//You will also place your clickhandler in here
  the_number = pick_number();
  $("button").click(make_guess);
  //makeNewButtons();

  function make_guess() {
    var the_guess = $("#guess_input").val();
    console.log(the_guess);
    if (the_guess > the_number) {
      $("#response_div").text("Too High!");
    } else if (the_guess < the_number) {
      $("#response_div").text("Too Low!");
    } else {
      $("#response_div").text("You guessed it!");
    }
  }
}
/*
function makeNewButtons(){

  for (var index = 0; index < 10; index++ , numStyle++){
    var numStyle = 0;
    var styleSwag = {
      class: 'styling',
      'text': numStyle
  }

    var swagDivs = $('<button>',styleSwag);
    $(".styleFun").append(swagDivs);

    swagDivs.click(function(){
      alert("The click happened");
    })
    $("styleFun").append(swagDivs);


  }
}
*/
