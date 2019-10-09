$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    function pigLatinizer(word){
        var word = $(".input").val();
        word = word.split("");
        // word.forEach(function(letter){
        //     vowels.forEach(function(vowel){
        //         if(letter==!vowel){
        //             //take letter out of word
        //             word.shift(letter);

        //             //place letter into the end of word
        //             word.push(letter);

        //         }else if(letter === vowel){
        //             stop();
        //         }
        //     });
        // });
        newWord = word.join('');
        pigLatinWord = newWord.concat("ay");
        $("#output").text(pigLatinWord);
    }

    $("#button").click(function() {
        pigLatinizer();
    });


});
