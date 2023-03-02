var longestCommonPrefix = function(str) { 
    if (str.length === 0) return "";

    if (str.length === 1) return str[0];

    let prefix = "";
    let prototypeString = str[0];

    for (let i = 0; i < prototypeString.length; i++) {
        let char = prototypeString[i];
        for (let j = 1; j < str.length; j++) {
            if (i >= str[j].length || str[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));