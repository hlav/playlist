var jaxx = $.ajax({
url: "https://lit-fortress-6467.herokuapp.com/object",
method: "GET",
dataType: "json"

});
var arr = [];

jaxx.done(function(response) {

var drilldown = response.results;

var imgOne = Math.random()
var imgTwo = Math.random()
var imgThree = Math.random()
console.log(imgOne, imgTwo, imgThree);
var linkOne = "", linkTwo = "", linkThree ="";

if (imgOne < .20) {linkOne = "images/21.jpg"}
else if (imgOne >= .20 && imgOne <.40) {linkOne = "images/division_bell.jpg"}
else if (imgOne >= .60 && imgOne > .80) {linkOne = "images/ghost_in_the_machine.jpg"}
else if (imgOne >=.40 && imgOne >.60) {linkOne = "images/red.jpg"}
else { linkOne = "images/thriller.png"
}
if (imgTwo < .20) {linkOne = "images/21.jpg"}
else if (imgTwo >= .20 && imgTwo <.40) {linkTwo = "images/division_bell.jpg"}
else if (imgTwo >= .60 && imgTwo > .80) {linkTwo = "images/ghost_in_the_machine.jpg"}
else if (imgTwo >=.40 && imgTwo >.60) {linkTwo = "images/red.jpg"}
else {
  linkOne = "images/thriller.png"
}

if (imgThree < .20) {linkThree = "images/21.jpg"}
else if (imgThree >= .20 && imgThree <.40) {linkThree = "images/division_bell.jpg"}
else if (imgThree >= .60 && imgThree > .80) {linkThree = "images/ghost_in_the_machine.jpg"}
else if (imgThree >=.40 && imgThree >.60) {linkThree = "images/red.jpg"}
else {
  linkOne = "images/thriller.png"
}


$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkOne +  '></span>');
$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkTwo +  '></span>');
$(".trips").append('<span><img height= 150px width =150px class="'+ 'i' +'" src=' + linkThree +  '></span>');



// var link = "images/division_bell.jpg"
//
// for (var i = 0; i < 3; i++) {
//
// $(".trips").append('<span><img height= 150px width =150px class="'+ i +'" src=' + link +  '></span>');

// $("#aCover").append('<img src='"  + link + "'>');

// arr.push(drilldown[i].cover_art);
// }
});
//
// var jaxxp = $.ajax({
//   url: "https://lit-fortress-6467.herokuapp.com/post",
//   method: "POST",
//   dataType: ""
//
// })
//
// jaxxp.done(console.log("successful post"))


//
//
// $("#trigger").click(function(){
//   var link = "";
//   var rando = Math.random();
//   if (rando <= .33) {
//     link = collection.images[0]["image_src"]
//
//   }
//   else if (rando > .33 && rando < .66) {
//     link = collection.images[1]["image_src"]
//
//   }
//   else {
//   link = collection.images[2]["image_src"]
//   }
//
//   $("#container").append('<img class="fox" src=' + link +  '>')
