$( "document" ).ready(function() {
    var vowel= ["a","e","i","o","u"];
    function pigLatinizer(word){
        var word = $(".input").val();
        word = word.split("");
        word.forEach(function(letter){
            if (letter.equals(vowel)){
                var letter = word.split(letter);
                word = word.concat(letter);
            } else {
                word = word.concat("ay");
            }
        });
        $("#output").text(word);
    }

    $("#button").click(function() {
        pigLatinizer();
    });


});
