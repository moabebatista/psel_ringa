function somaAlvo (array, targetSum) {
    let result = [];

    for(primeiroNumero of array) {
        for (segundoNumero of array) {
            if (primeiroNumero != segundoNumero && primeiroNumero + segundoNumero === targetSum) {
                result.push(primeiroNumero, segundoNumero);
            }
        }
    }

    // let resultFinal = [... new Set(result)];
    console.log(result)
    let resultFinal = result.filter((a, b) => result.indexOf(a) === b);
    console.log(resultFinal);
}

somaAlvo ([3, -4, 8, 9, 11, -1, 6], 10);