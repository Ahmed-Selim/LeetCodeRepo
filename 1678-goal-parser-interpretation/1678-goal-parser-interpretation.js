/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command.replace(new RegExp('\\(\\)', 'g'), 'o')
                    .replace(new RegExp('\\(', 'g'), '')
                    .replace(new RegExp('\\)', 'g'), '') ;
};