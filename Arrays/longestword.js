// find the longest word in the text

function longestword(text){
    let longestword = '';
    let maxlength = 0
    let words = text.split(' ');

    words.forEach(word => {
        if(word.length > maxlength){
            maxlength = word.length;
            longestword = word;
        }
    })
    return longestword;
}

console.log(longestword('some brave sailors started on a long journey in one direction'))