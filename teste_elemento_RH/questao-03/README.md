# Questão 03

Escreva uma função que receba uma string não vazia e a comprima de forma a substituir as sequências de caracteres iguais por um contador seguido do caractere em si. Por exemplo, "AAA" deve ser codificad como "3A", "AABBB" com "2A3B" e assim por diante.
Para complicarmos um pouco, a string de entrada pode conter qualquer caractere, incluindo números e caracteres especiais. E já que as strings codificadas devem ser decodificáveis, nós não podemos ingenuamnte codificar uma string longa simplesmente pelo número de repetições. Por exemplo, "AAAAAAAAAAAA"(12A's) não poderia ser codificado como "12A", uma vez que esta string poderia ser decodificada como "AAAAAAAAAAAA" quant "1AA". Logo, repetições de 10 ou mais caracteres, devem ser codificadas de forma dívidida, ou seja, o exemplo acima deveria ser codificado como "9A3A".

Exmplo de entrada:
```JS
    const string = "BBBBBBBBBBBBBAACCCDD";
```

Exmplo de saída:
```JS
    "9B4B2A3C2D";
```