$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u","A","E","I","O","U"];
    var pigLatinArr = [];
    function pigLatinizer(){
        var input = $(".input").val();
        var inputArr = input.split(" ");
        inputArr.forEach(function(word){
            if(vowels.includes(word.charAt(0))){
                var vowelPigLatin = word.concat("way");
                pigLatinArr.push(vowelPigLatin);
            } else{
                //if it isn’t , take the letter out of the word
                var firstLetter = word.slice(0,1);
                var restOfWord = word.slice(1,word.length);
		        //put it at the end of the word
                var newWord = restOfWord+firstLetter;

		        //repeat until the first character is a vowel
                //put "ay" at the end of the word
                if (vowels.includes(newWord.charAt(0))){
                    var pigLatinWord = newWord.concat("ay");
                    pigLatinArr.push(pigLatinWord);
                } else {
                    var secondLetter = newWord.slice(0,1);
                    var restOfnewWord = newWord.slice(1,newWord.length);

		            //put it at the end of the word
                    var newNewWord = restOfnewWord+secondLetter;
                    var pigLatinWord = newNewWord.concat("ay");
                    pigLatinArr.push(pigLatinWord);
                }
            }
        var pigLatinSentence = pigLatinArr.join(" ");
        $(".output").append("<p>"+pigLatinSentence+"</p>");
        });
    }


    $("#button").click(function() {
        pigLatinizer();
    });

});
