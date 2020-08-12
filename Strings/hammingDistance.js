// given two strings find the hamming distance between them 
// should be of equal length.
//eg: 'river', 'rover' -- 1, 'abc', 'mnb' -- 3
const hammingDistance = (a, b) => {
    if(a.length !== b.length) return;

    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i].toLowerCase() !== b[i].toLowerCase()){
            distance++
        }
    }
    return distance
}