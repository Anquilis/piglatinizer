$( "document" ).ready(function() {
    var vowels= ["a","e","i","o","u"];
    var pigLatinArr = [];
    function pigLatinizer(){
        //takes the input and put it all in lowercase
        var input = $(".input").val();
        input = input.toLowerCase();
        //clears the array
        pigLatinArr = [];
        //clears the ouput div
        $(".output").html("");
        //splits the input into an array between the spaces
        var inputArr = input.split(/[ ,.!'-]+/);

        checkForVowelsProto(inputArr);

        var pigLatinSentence = pigLatinArr.join(" ");
        $(".output").append("<p>"+pigLatinSentence+"</p>");
    }

    function checkForVowels(inputArr) {
        inputArr.forEach(function(word){
                if(vowels.includes(word.charAt(0))){
                    var vowelPigLatin = word.concat("way");
                    pigLatinArr.push(vowelPigLatin);
                } else {
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
        });
    }

function checkforVowelsProto(inputArr){
    inputArr.forEach(function(word){
                if(vowels.includes(word.charAt(0))){
                    var vowelPigLatin = word.concat("way");
                    pigLatinArr.push(vowelPigLatin);
                } else {
                    for(i = 0 ; vowels.includes(i); i++){
                        if (vowels.includes(word.charAt(0))){
                            var pigLatinWord = word.concat("ay");
                            pigLatinArr.push(pigLatinWord);
                        } else {
                            //if it isn’t , take the letter out of the word
                            var firstLetter = word.slice(0,i);
                            var restOfWord = word.slice(i,word.length);
                            //put it at the end of the word
                            var newWord = restOfWord+firstLetter;
                            pigLatinArr.push(vowelPigLatin);
                        }
                    }
            }
        });
}


    $("#button").click(function() {
        pigLatinizer();
    });

});
