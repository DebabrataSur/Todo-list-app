$("ul").on("click", "li", function() {
    $(this).toggleClass("clicked");
});


$("h3").on("click","span", function() {
    $("input[type='text']").fadeToggle(500);
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500,function() {
    $(this).remove();
});
e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        // erasing from input 
        var text = $(this).val();
        // grabbing the value
        $(this).val("");
        // add in the list
        var add = $("<li><span><i class= 'fas fa-trash'></i></span> " + text + "</li>");
        $("ul").append(add);
    }
});
