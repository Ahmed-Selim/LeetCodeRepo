/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let ans = s.split('') ;

    for (let index = 0 ; index < s.length ; index++) {
        ans[indices[index]] = s.charAt(index) ;
    }

    return ans.join('');
};