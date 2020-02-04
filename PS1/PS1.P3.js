let computation = (input,func) => func(input);
let result = computation(
    'supercalifragilisticexpialidocious',
    str => {
        let res = str.split('c');
        res = [res[0]].concat(res.slice(1,res.length).map((first) =>'c'+first));
        return res;
    }
);

let result2 = computation(
    'supercalifragilisticexpialidocious',
    str =>{
        const modifystr = str.replace(/a/g,'A');
        const replacecounts = (str.match(/a/g) ||[]).length;
        const leng = modifystr.length;
        const obj = {
            originalString : str,
            modifiedString : modifystr,
            numberReplaced : replacecounts,
            length : leng
        };
        return obj;
    }
);
console.log(result);
console.log(result2);