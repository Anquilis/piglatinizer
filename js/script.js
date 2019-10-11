$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    function pigLatinizer(){
        var input = $(".input").val();
        input = input.toLowerCase();

        var restOfWord = input.slice(1,-1);
        var firstLetter = input.slice(0,1);

        var newWord = restOfWord+firstLetter;
        var pigLatinWord = newWord.concat("ay");
        $("#output").text(pigLatinWord);
    }


    $("#button").click(function() {
        pigLatinizer();
    });

});
