$(document).ready(function() {
  $("formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var name2Input = $("input#name2").val();

    $(".name").text(nameInput);
    $(".name2").text(name2Input);

    $("#story").show();

    event.preventDefault();
  });
});
