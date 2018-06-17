function tribonacci(signature, n) {
    const gen = tribonacciGen(signature);
    for (let i = 0; i < n - 3; i++) {
        signature.push(gen.next().value);
    }
    return signature;
}

function* tribonacciGen(signature) {
    let [a, b, c] = signature;
    while (true) {
        [a, b, c] = [b, c, a + b + c];
        yield c;
    }        
}