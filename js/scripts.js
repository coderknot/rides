// $(document).ready(function() {
//   $("#animals").change(function() {
//     this.form.submit(function(event) {
//       event.preventDefault();
//       alert("bear works!");
//     });
//   });
// });

// error checking.   Is "height" actually a number?


 var heightErrorChecking = function (height) {

   if (height === "") {
     $("#height-input").addClass("has-error");

     $(".alert-danger").show();

   } else {
     $("#height-input").removeClass("has-error");
     $(".alert-danger").hide();
     return parseInt(height);
   }
 }

var whichRide = function (height,thrill) {

  if (height < 60) {
    $("#ride-row").hide();
    $(".tooShortTall").show();

  } else if (height < 66 && thrill < 7){
    $(".short").addClass("highlight");
    $(".panel-default#rocket").addClass("rotate");

  } else if (height < 66 && thrill >= 7){
    $(".short").addClass("highlight");
    $(".panel-default#space").addClass("rotate");

  } else if (height < 72 && thrill < 5){
    $(".short").addClass("highlight");
    $(".tall").addClass("highlight");
    $(".panel-default#rocket").addClass("rotate");

  } else if (height < 72 && thrill > 4 && thrill < 9){
    $(".short").addClass("highlight");
    $(".tall").addClass("highlight");
    $(".panel-default#force").addClass("rotate");

  } else if (height < 72 && thrill > 8 && thrill < 12){
    $(".short").addClass("highlight");
    $(".tall").addClass("highlight");
    $(".panel-default#space").addClass("rotate");

  } else if (height < 72 && thrill > 11 ){
    $(".short").addClass("highlight");
    $(".tall").addClass("highlight");
    $(".panel-default#hulk").addClass("rotate");

  } else if (height < 84 && thrill < 7) {
    $(".tall").addClass("highlight");
    $(".panel-default#force").addClass("rotate");

  } else if (height < 84 && thrill > 6) {
    $(".tall").addClass("highlight");
    $(".panel-default#hulk").addClass("rotate");

  } else {
    $("#ride-row").hide();
    $(".tooShortTall").show();
  }
}

$(document).ready(function() {
  $("#ride-form").submit(function(event) {
    event.preventDefault();
    $(".col-md-3").removeClass("highlight");
    $(".panel-default").removeClass("rotate");
    $("#ride-row").show();
    $(".tooShortTall").hide();


    var height =$("#height").val();
    height = heightErrorChecking (height);

    var heightComfort = parseInt($("#height-comfort-input").val());
    var adventure = parseInt($("#adventure-input").val());
    var thrill = heightComfort * adventure;
    whichRide(height,thrill);
    });
  });

  // $("div.panel panel-default:not(#bears)").hide();
