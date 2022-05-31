/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let ans = [], ones = [] ;
    
    for (let i = 0 ; i < boxes.length ; i++) {
        if (boxes.charAt(i) == '1')
            ones.push(i)
    }

    for (let i = 0 ; i < boxes.length ; i++) {
        let count = 0 ;
        for (let j of ones) {
            if (i == j)
                continue;
            count += Math.abs(i - j)
        }
        ans.push(count)
    }

    return ans;
    
    
};