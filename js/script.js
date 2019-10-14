$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    function pigLatinizer(){
        var input = $(".input").val();
        input = input.toLowerCase();

        inputArr = input.split(" ");
        inputArr.forEach(function(word){
                if(vowels.includes(word.charAt[0])){
                    var pigLatinWord = word.concat("way");
                } else {
                    var firstLetter = inputArr.slice(0,1);
                    var restOfWord = inputArr.slice(1,word.length);
                    
                    var newWord = restOfWord+firstLetter;
                    var pigLatinWord = newWord.concat("ay");
                }
            });

        $("#output").text(pigLatinWord);
    }


    $("#button").click(function() {
        pigLatinizer();
    });

});
