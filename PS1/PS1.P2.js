let result = expression =>{
    const parts = expression.match(/(\d+|[-+/*])/g);
    switch (parts[1]) {
        case '+':
            return Number(parts[0])+Number(parts[2]);
            break;
        case '-':
            return Number(parts[0])-Number(parts[2]);
            break;
        case '*':
            return Number(parts[0])*Number(parts[2]);
            break;
        case '/':
            return Number(parts[0])/Number(parts[2]);
            break;
    }
};

let exp1 = '3+4';
let exp2 = '5*7';
let exp3 = '6-1';
let exp4 = '9/2';

console.log(`${exp1} = ${result(exp1)}`);
console.log(`${exp2} = ${result(exp2)}`);
console.log(`${exp3} = ${result(exp3)}`);
console.log(`${exp4} = ${result(exp4)}`);
