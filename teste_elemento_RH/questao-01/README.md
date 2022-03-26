# Questão 01

Escreva uma função que recebe um array não vazio de inteiros distintos e um inteiro representando uma soma alvo. Se quaisquer dois números de entrada somam a soma alvo, a função deve retorná-los no array de saída, em qualquer ordem. Se nenhum par de números no array de entrada somarem a soma alvo, a função deve retornar um array vazio.

Note que a soma deve ser obtida somando dois inteiros diferentes do array, você não pode somar um inteiro com ele mesmo.

Você pode assumir que existirá no máximo um par de números somando a soma alvo.

Exemplo de entrada

```JavaScript
    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;
```

exemplo de Saída
```JavaScript
[ -1, 11 ] //pode ser na ordem invertida
```