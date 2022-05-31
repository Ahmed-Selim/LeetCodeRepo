/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    for (let op of operations) {
        x += calcOperation(op) ;
    }

    return x;
};

function calcOperation(operation) {
    switch (operation) {
        case "--X":
        case "X--":
            return -1;
    
        default:
            return 1;
    }
}