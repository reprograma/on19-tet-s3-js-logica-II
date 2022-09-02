# Exercício de Casa 🏠 

## Crie uma aplicação para uma loja de roupas que deseja realizar um super programa de descontos: 
  
1. Regras de negócio:
  - Peças a partir de R$60,00  - desconto de 10%
  - Peças a partir de R$100,00 - desconto de 20%
  - Peças a partir de R$200,00 - desconto de 50%
  - Caso a Cliente pague à vista ou pix, recebe ainda um desconto extra de 5% no valor total da compra;
  - No caso de uma cliente comprar acima de 10 peças ou o total da compra com descontos for maior que R$800,00 ela recebe ainda um cupom de R$50,00 para sua próxima compra, esta informação deve ser retornada junto ao valor final da compra;  

2. Critérios de aceite:
  - Crie uma função que calcule as compras das clientes e aplique toda a lógica necessária;
  - O retorno deve ser o valor total (soma dos valores dos produtos), desconto aplicado e valor final (valor total - descontos) e a informação do cupom ganho, caso se aplique;
  - Como DESAFIO EXTRA o retorno pode conter também Data e Hora da compra;
  - A simulação do seu código deve atender 3 clientes, uma delas é a Lilit que realizou a seguinte compra:
    
```js
let clienteLilit = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Calça preta', valor: 290.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ]
}
```
     
  - As outras duas clientes devem ser criadas por vocês e seguir o modelo de dados usado na clienteLilit, a quantidade de itens comprados fica ao seu critério;
  
3. Dicas para a execução do exercício:
  - Observe que este exercício aplica os conceitos aprendidos até agora de função, estrutura de repetição, estrutura condicional, operadores, variáveis e lógica;
  - Observe também que a propriedade(chave) carrinho do objeto clienteLilit é uma lista de dados (Array), que apesar de nao termos estudado à fundo, já sabemos como iterar (percorrer cada elemento) através do `for` ou `for... of` (estejam livres para usar outros tipos de métodos de iteração caso queiram);
  - Uma função que recebe argumento resolve muito bem esse problema, certo?
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
