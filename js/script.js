$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    function pigLatinizer(word){
        var word = $(".input").val();
        word = word.split("");
        letter = word.slice(0,1);
        word = word.slice(1);
        word = word.concat(letter);
        newWord = word.join('');
        pigLatinWord = newWord.concat("ay");
        $("#output").text(pigLatinWord);
    }

    $("#button").click(function() {
        pigLatinizer();
    });


});
