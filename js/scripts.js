$(document).ready(function() {
  $(".clickable").click(function() {
    // $("p.defintionContent").addClass("activeDef");
    // (".defintionContent").find("#" + $(this).text()).addClass("activeDef");
    // (".defintionContent").find($(this).text()).css("color", "red");
    $(".defintionContent").removeClass("activeDef");
    var defOfInterest = "#" + $(this).text(); //defOfInterest is now a string

    $(defOfInterest).addClass("activeDef"); //selecting thing that matches string value
    // .css("color", "red");
    $("h2").remove();
    $("div#definitionHeading").prepend("<h2>"+$(this).text()+"</h2>");
  });
  $("button#invertButton").click(function(){
    $("body").toggleClass("darkBody");
  })
});
