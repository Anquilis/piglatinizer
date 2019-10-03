$( "document" ).ready(function() {
function pigLatinizer(string){
    string = $(".input").val();
    $("#output").text(string+"ay");
}

$("#button").click(function() {
    pigLatinizer();
});


});
