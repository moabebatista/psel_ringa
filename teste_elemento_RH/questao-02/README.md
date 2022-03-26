# Queestão 02

É o dia da foto da turma em uma escola local e você foi o fotógrafo escolhido para tirá-las. A classe que você irá fotografar tem um número de alunos e todos estes alunos estão usando uniformes pretos ou laranjas em iguais quantidaes, ou seja, metade da turma está com uniformes pretos e metade com uniformes laranjas. Você é responsável por arranjar os alunos em duas filas para a fotografia, uma na frente na outra. Cada fila deve conter o mesmo número de alunos e deve preencher os seguintes requisitos.

- Todos os alunos usando uniforme preto devem estar na mesma fila;
- Todos os alunos usando uniforme laranja devem estar na mesma fila;
- Todos os alunos na fila de trás devem ser estritamente mais altos que o aluno diretamente em sua frente na fila da frente.

Você recebedois arrays de entrada: um contendo a altura dos alunos com uniformes pretaos e outro contendo a altura dos alunos comuniformes laranjas. Esses arrays sempre terão o mesmo tamanho e cada altura(em cm) será um inteiro positivo. Escreva uma função que retorne true ou false caso seja possível ou não tirar a fotografia de uma determinada turma segundo os parâmetros estabelecidos. você pode assumir que cada turma tem ao menos dois alunos.

Exemplo de Entrada

```JavaScript
    const blackUniformHeights = [150, 179, 149, 152, 154];
    const orangeUniformHeights = [162, 181, 151, 160, 170];
```
Exmplo de Saída

```JavaScript
    true
```