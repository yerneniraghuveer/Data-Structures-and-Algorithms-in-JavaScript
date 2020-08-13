// given an input string find all duplicate characters


function printAllDuplicates(text){
    let strArr = text.split('');
    let length = strArr.length;
    let map = {};
    let output = [];

    for(let i = 0; i < length; i++){
        let el = strArr[i];
        map[el] = map[el] >= 1 ? map[el] + 1 : 1;
        if(map[el] === 2){ //if map has 2
            output.push(el)
        }
    }
    console.log(output);
}

printAllDuplicates('ssrreeeekkaanntthh');