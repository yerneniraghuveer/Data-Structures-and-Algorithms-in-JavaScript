function validParenthesis(text) {
    let stack = [];

    let open = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if(open[element]){
            stack.push(open[element]);
        } else {
            if(element !== stack.pop()){
                return false
            }

        }
    }
    return stack.length === 0;
}

console.log( validParenthesis('({[}])'))