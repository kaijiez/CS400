const sorted = string => {
    const letters = string.split('');
    const ans=[];
    for(var i =0; i<letters.length; i++){
        if(letters[i].toLowerCase()!=letters[i].toUpperCase()){
            ans.push(letters[i])
        }
    }
    const result = ans.sort().join('');
    return result
};
console.log(` The sorted string is ${sorted('$#%5nrgg,,$@')}`);