
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);

    $("#story").show();

    event.preventDefault();
  });

});
