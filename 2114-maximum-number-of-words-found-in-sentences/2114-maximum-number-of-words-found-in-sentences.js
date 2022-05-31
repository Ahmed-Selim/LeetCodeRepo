/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxCount = 0;
    
    sentences.forEach(function (value) {
        maxCount = Math.max(maxCount, value.split(' ').length) ;
    });

    return maxCount;
};