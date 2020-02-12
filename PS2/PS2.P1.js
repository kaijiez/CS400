function* fibs ()  {
    let [val1, val2, result] = [0,1,0];
    yield 0;
    yield 1;
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenfibs(){
    for( num of fibs()){
        if(num%2==0){
            yield num;
        }
    }
}

let myFibs = evenfibs();
let count = 6;
while (count --> 0) {
    console.log(myFibs.next().value)
}
