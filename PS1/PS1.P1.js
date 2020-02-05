const sorted = string => {
    const letters = string.split('');
    //remove numbers and punctuations from string
    const ans=[];
    for(var i =0; i<letters.length; i++){
        if(letters[i].toLowerCase()!=letters[i].toUpperCase()){
            ans.push(letters[i])
        }
    }
    //sort and join each character back
    const result = ans.sort().join('');
    return result
};
console.log(` The sorted string is ${sorted('$#%5nrgg,,$@')}`);