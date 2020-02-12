function* printwords(sentence){
    yield* sentence.match(/([a-zA-Z]+)/g);
}

let wordgen = printwords('All I know is something like a bird within her sang');
for( const word of wordgen){
    console.log(word);
}
