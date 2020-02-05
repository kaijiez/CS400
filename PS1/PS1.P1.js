const sorted = string => {
    return string.split('').sort().join('');
};
console.log(` The sorted string is ${sorted('supercalifragilisticexpialidocious')}`);