$( "document" ).ready(function() {
    var vowel =["a","e","i","o","u"];
function pigLatinizer(string){
    string = $(".input").val();
    string = txt.split("");
    string.forEach(function(letter){
        var letter = string.charAt(string.index[letter]);
        if (letter == vowel){
            string.replaceFirst(letter, "");
            string = string + letter;
        } else if (letter ==! vowel){
            string = string + "ay";
        }
    });
    $("#output").text(string);
}

$("#button").click(function() {
    console.log("Hello world!");
    pigLatinizer();
});


});
