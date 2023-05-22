<p align="center">
  <img src="https://media.licdn.com/dms/image/C4D0BAQHtE33hWu4VhA/company-logo_200_200/0/1626919295622?e=2147483647&v=beta&t=16GQVmdwP-VxZ5IiG6-6y2NHM8S5aw2odG9SsraWjCQ" width="200" alt="Licitar Logo"/>
</p>

<h1 align="center">Backend de CRUD de Licitações</h1>
<h3 align="center">CRUD de teste técnico em Nest.js com Autenticação JWT</p>

## Instalação

Abra o terminal na pasta onde se encontra o projeto e instale as dependências com:

```bash
npm install
```

Depois abra o servidor:

```bash
npm run start
```

<br>

## Utilização

Após abrir o servidor, estará disponível no endereço:
[127.0.0.1:3000](127.0.0.1:3000).
<br>

Uma Interface gráfica para todas as rotas de API do projeto está disponível em:
[127.0.0.1:3000/api](127.0.0.1:3000/api), com o GUI Swagger da OpenAPI.
<br>

Para utilizar da autenticação, é necesário criar um usuário com ['/user'](http://127.0.0.1:3000/api#/default/UserController_create), logar com o usuário em ['/auth/login'](http://127.0.0.1:3000/api#/default/AuthController_signIn), e aplicar o Bearer token, clicando no botão verde "Authorize" na parte direita do topo da página, e inserindo o token recebido. (Apenas o token, sem aspas ou prefixos)
<br>

Ou diretamente fazer uma requisição utilizando o token como Bearer, usando alguma ferramenta como [Postman](https://www.postman.com).
<br>

Também há duas funções recorrentes no código:
<br>
1: Ao iniciar o servidor, ele é lentamente populado por 10 entradas de disputas.
<br>
2: A cada segundo do servidor, é conferido por disputas que tenham mais de 10 minutos de criação, disputas com mais de 10 minutos são marcadas como inativas.

## Notas Finais

Algumas partes do projeto foram feitas de forma a propor uma mais fácil avaliação do código, como algumas requisições de usuário que podem ser feitas sem autenticação (Como [/user](http://127.0.0.1:3000/api#/default/UserController_findAll), que pode retornar todos os usuários e senhas) e o fato do segredo para a autenticação JWT ser hard-coded diretamente dentro do código.<br><br>
Estou ciente de que esssas partes poderiam apresentar riscos de segurança em uma aplicação real em produção, e são práticas que não devem ser seguidas normalmente, mas foram colocadas para propor mais facilidade na hora de observar a lógica de backend, e como funcionam os métodos e funções.
<br><br>
Obrigado pela oportunidade!
<br>
Peço perdão de novo pelos imprevistos no caminho que causaram a demora e falta do front-end.
