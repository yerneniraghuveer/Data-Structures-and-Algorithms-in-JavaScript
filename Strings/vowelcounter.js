// count the number of vowels in a string

const vowelCounter = (text) => {
    let matchingInstances = text.match(/['aeiou']/gi);

        if(matchingInstances){
            return matchingInstances.length;
        } else {
            return 0
        }
}

function vowelCounter(text){
    let matchingInstances = text.match(/['aeiou']/gi);

    if(matchingInstances){
        return matchingInstances.length;
    } else {
        return 0;
    }
}