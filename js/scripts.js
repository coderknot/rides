// $(document).ready(function() {
//   $("#animals").change(function() {
//     this.form.submit(function(event) {
//       event.preventDefault();
//       alert("bear works!");
//     });
//   });
// });

$(document).ready(function() {
  $("#animals").on('change', function() {
    var animal = $("#animals").val();

    if (animal==="Bears") {
      $("#bears").show();
      $(".panel-default").not("#bears").hide();
    } else if (animal==="Birds"){
      $("#birds").show();
      $(".panel-default").not("#birds").hide();

    } else if (animal==="Bees"){
      $("#bees").show();
      $(".panel-default").not("#bees").hide();

    }

    });
  });

  // $("div.panel panel-default:not(#bears)").hide();
