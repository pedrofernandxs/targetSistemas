function quantidadeLetrasA(string) {
    
    let stringMinuscula = string.toLowerCase();

    let existe = stringMinuscula.includes('a');

    let qtd = stringMinuscula.split('a').length - 1;

    if(existe) {
        console.log(`A letra 'a' existe na string e ela ocorre ${qtd} vezes`);
    } else {
        console.log(`A letra 'a' maiúscula ou minúscula não existe na string.`);
    }
}


let frase = prompt('Informe uma frase: ')
quantidadeLetrasA(frase)