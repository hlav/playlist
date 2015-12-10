



var jaxx = $.ajax({
url: "https://lit-fortress-6467.herokuapp.com/object",
method: "GET",
dataType: "json" });

var container = [];


var imgOne = Math.random()
var imgTwo = Math.random()
var imgThree = Math.random()
console.log(imgOne, imgTwo, imgThree);
var linkOne = "", linkTwo = "", linkThree ="";
var albums = [];


jaxx.done(function(response) {

  var drilldown = response.results;
  for (var i = 0; i < drilldown.length; i++) {
    // albums.push("<li class='flex-item' id='alb" + i + "'><img src ='images/"+drilldown[i].cover_art +"'/></li>");
    albums.push("<li class='flex-item' id='" + drilldown[i]["id"] + "'><img src ='images/"+drilldown[i].cover_art +"'/><a href='#'></li>");

  $(".flex-container").append(albums[i]);
  console.log(albums[i]);}

if (imgOne < .20) {linkOne = "images/21.jpg"}
else if (imgOne >= .20 && imgOne <.40) {linkOne = "images/he_division_bell.jpg"}
else if (imgOne >= .60 && imgOne > .80) {linkOne = "images/ghost_in_the_machine.jpg"}
else if (imgOne >=.40 && imgOne >.60) {linkOne = "images/red.jpg"}
else { linkOne = "images/thriller.png"
}
if (imgTwo < .20) {linkOne = "images/21.jpg"}
else if (imgTwo >= .20 && imgTwo <.40) {linkTwo = "images/the_division_bell.jpg"}
else if (imgTwo >= .60 && imgTwo > .80) {linkTwo = "images/ghost_in_the_machine.jpg"}
else if (imgTwo >=.40 && imgTwo >.60) {linkTwo = "images/red.jpg"}
else {  linkOne = "images/thriller.png"}

if (imgThree < .20) {linkThree = "images/21.jpg"}
else if (imgThree >= .20 && imgThree <.40) {linkThree = "images/the_division_bell.jpg"}
else if (imgThree >= .60 && imgThree > .80) {linkThree = "images/ghost_in_the_machine.jpg"}
else if (imgThree >=.40 && imgThree >.60) {linkThree = "images/red.jpg"}
else {linkOne = "images/thriller.png"}


$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkOne +  '></span>');
$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkTwo +  '></span>');
$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkThree +  '></span>');


$("#2").click(function(){
$("#selectedBin").append(drilldown[0]["artist"] + ", " + drilldown[0]["title"] + "<br>" )
container.push(drilldown[0]["title"]); });
$("#6").click(function(){
$("#selectedBin").append(drilldown[1]["artist"] + ", " + drilldown[1]["title"] + "<br>" )
container.push(drilldown[1]["title"]); });

$("#22").click(function(){
$("#selectedBin").append(drilldown[2]["artist"] + ", " + drilldown[2]["title"]+ "<br>" );
container.push(drilldown[2]["title"]);});
$("#18").click(function(){
  $("#selectedBin").append(drilldown[3]["artist"] + ", " + drilldown[3]["title"] + "<br>")
container.push(drilldown[3]["title"]);});
$("#55").click(function(){
  $("#selectedBin").append(drilldown[4]["artist"] + ", " + drilldown[4]["title"] + "<br>");
  container.push(drilldown[4]["title"]);
console.log(container);

});



});
$("#subBin").click(function(){
  console.log(container);

})




var jaxxp = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/post",
  method: "POST",
  data: albums})

jaxxp.done(console.log("successful post"))
