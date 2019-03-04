

//create a click handler for the Post button.

$("button").click(function() {
    $(".comments").append("<div class='row'><div class='avatar odie'></div><div class='comment'>"+$("input").val()+"</div></div>");
    $("input").val("");
    $("input").focus();
});