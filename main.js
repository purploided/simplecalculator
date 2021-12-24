// weird calculator i made in an hour or so
// ~ nicolas

let calculator = prompt('Add, Subtract, Divide or Multiply?');
if (calculator === 'Add') {
    const numeroUno = parseInt(prompt('1'));
    const numeroDos = parseInt(prompt('2'));
    
    const sum = (numeroUno + numeroDos);

    console.log(sum);
}
else if (calculator === 'Subtract') {
    const numeroUno = parseInt(prompt('1'));
    const numeroDos = parseInt(prompt('2'));

    const sum = (numeroUno - numeroDos);

    console.log(sum);
}
else if (calculator === 'Multiply') {
    const numeroUno = parseInt(prompt('1'));
    const numeroDos = parseInt(prompt('2'));

    const sum = (numeroUno * numeroDos);

    console.log(sum);
}
else if (calculator === 'Divide') {
    const numeroUno = parseInt(prompt('1'));
    const numeroDos = parseInt(prompt('2'));

    const sum = (numeroUno / numeroDos);

    console.log(sum);
}
else {
    console.error('Incorrect input.');
}