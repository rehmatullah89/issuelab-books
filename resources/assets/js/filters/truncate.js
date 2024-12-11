module.exports = function(string, words) {
    if(typeof string == 'undefined'){
        return '';
    }
    if(typeof words == 'undefined'){
        words = 100;
    }
    var splitString = string.split(" ");
    var splicedString = splitString.splice(0,words);
    return splicedString.join(" ") + ( splicedString.length < splitString.length ? "..." : "" );
};
