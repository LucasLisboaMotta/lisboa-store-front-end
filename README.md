# Bem-vindo a lojinha do lisboa

Este projeto trabalha em conjunto com outro repositório: https://github.com/LucasLisboaMotta/lisboa-store-back-end

A intenção é simular uma página de produtos, podendo visualizar, criar, editar e excluir todos os produtos listados.

Essa foi a minha primeira experiencia utilizando TypeScript no front-end, e pude aprender alguns conceitos novos graças a esse projeto.

O projeto esta no ar pela heroku, no seguinte link: https://lisboa-store-front-end.herokuapp.com/


Para iniciar o projeto, primeiro você precisa fazer o clone pelo seguinte comando
```
git clone git@github.com:LucasLisboaMotta/lisboa-store-front-end.git
```

em seguida você deve utilizar o seguinte comando para instalar as dependências
```
npm install
```
Para o projeto funcionar, ele deve ter uma conecção com o back-end. Ele já esta configurado para se ligar ao repositório lisboa-store-back-end que já esta no ar. 

Porem, caso queira rodar localmente, basta clonar o seguinte repositório https://github.com/LucasLisboaMotta/lisboa-store-back-end e seguir os passo a passo dele. E após iniciar o back-end, você deve alterar o arquivo  `src/APIConnection/index.ts`  na `linha 4`, alterando a URL da conecção com o backend
```
const url = 'https://lisboa-store-back-end.herokuapp.com/'
```
Apos terminar as conigurações, voce pode iniciar o projeto com o comando 
```
npm start
```
