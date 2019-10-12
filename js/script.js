$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    function pigLatinizer(){
        var input = $(".input").val();
        input = input.toLowerCase();

        inputArr = input.split(" ");
        inputArr.forEach(function(word){
                if(vowels.includes(word.charAt[0]))
                var pigLatinWord = word.concat("way");
                else {
            for (i = 0; i < word.length; i++){
                var restOfWord = inputArr.slice(i,word.length);
                var firstLetter = inputArr.slice(0,i);
                }
            }
        });
        var newWord = restOfWord+firstLetter;

        $("#output").text(pigLatinWord);
    }


    $("#button").click(function() {
        pigLatinizer();
    });

});
