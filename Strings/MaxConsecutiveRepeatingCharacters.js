// given a string, find the maximum consecutive repeating characters.

function maximumConsecutiveRepeatingCharacters(text){

    let count = 1;
    let maxCount = 0;
    let char = text[0];

    for (let index = 0; index < text.length; index++) {
        if(text[index] === text[index + 1]){
            count++;
        }
        if(count > maxCount){
            maxCount = count;
            char = text[index];
        }
        if(text[index] !== text[index + 1]){
            count = 1
        }
        
    }

    console.log(`${char}:${maxCount}`)

}

maximumConsecutiveRepeatingCharacters('aqseppppkkkkkccccccddddddd')