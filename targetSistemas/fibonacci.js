function sequenciaFibonacci(num) {
    // inicio
    let fibonacci = [0, 1];
    
    // verifica os proximos números
    for(let i = 2; i < num; i++) {
        fibonacci[i] =  fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    if(fibonacci.includes(num)) {
          console.log("O número existe no array.");
    } else {
          console.log("O número não existe no array.");
    }
        
    return fibonacci.slice(0, num);

}


let numDigitado = parseInt(prompt("Informe um número: "));
sequenciaFibonacci(numDigitado);
