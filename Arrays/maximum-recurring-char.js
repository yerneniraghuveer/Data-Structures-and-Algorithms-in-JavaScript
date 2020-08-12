// find maximum recurring char 

function maximumRecurringChar(arr){
    let map = {};
    let maxValue = 0;
    let maximumRecurringChar = '';

    for (const char of arr) {
        if(map.hasOwnProperty(char)){
            map[char]++
        }else{
            map[char] = 1
        }
    }

    for(const char in map){
        if (map[char] > maxValue) {
            maxValue = map[char];
            maximumRecurringChar = char;
        }
    }
        return maximumRecurringChar;
}

