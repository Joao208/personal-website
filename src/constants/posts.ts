export const posts = [
  {
    title: 'Que rumo vou seguir?',
    subtitle:
      'Você já deve ter se feito essa pergunta várias vezes, ninguém tem a resposta 100% correta, mas sempre tem dicas, segue umas abaixo 👇',
    description: 'Você já deve ter se feito essa pergunta várias vezes, ninguém tem a resposta 100% correta...',
    createdAt: new Date('2021-11-28'),
  },
  {
    title: 'Swagger Express',
    subtitle: 'Como usar Swagger em seu aplicativo ExpressJS',
    description: 'Esse artigo tem a intenção de te auxiliar na documentação com Swagger e expressjs...',
    createdAt: new Date('2021-11-29'),
  },
  {
    title: 'Socket.io',
    subtitle:
      'Você já precisou criar uma aplicação que precisasse de comunicação cliente-servidor em tempo real? Neste post, vamos te ajudar a fazer isso usando o framework Socket.IO, incluindo exemplos reais de casos de uso. Vamos lá?',
    description:
      'Socket.io é uma implementação em node para web socket, ou seja, uma forma de fazer comunicação em tempo real...',
    createdAt: new Date('2021-11-30'),
  },
] as Array<{ title: string; description: string; markdown: string; subtitle: string; createdAt: Date }>

export const markdowns = [
  `
Você já deve ter visto sobre Swagger - uma das ferramentas mais utilizadas para o desenvolvimento de OpenAPI Specification(OAS). Para documentações, o Swagger é uma ferramenta extremamente poderosa, que auxilia desenvolvedores a documentar suas APIs de uma forma muito simples. O Swagger também consegue ler a estrutura e criar documentações automaticamente, assim como fazer o oposto: ler uma documentação e criar uma API.

São perguntas extremamente comuns e muita das vezes os jovens não possuem a resposta, principalmente na área da tecnologia, temos diversos caminhos, diversas tecnologias, dentre diversas carreiras que dá pra seguir.

E eu não escapei desse processo, quando eu decidi que queria traçar a carreira de tecnologia, tive problemas em qual profissão me dedicaria, mas depois de estudar mais sobre as possibilidades, vi que o melhor para minhas habilidades seria engenharia de software, mas ai, me fiz mais uma duvida, qual linguagem?

Após entender o que era ser um engenheiro de software eu precisava escolher uma linguagem de programação que atendesse os requisitos que eu precisava na época, e sem foco, eu comecei a estudar PHP, Python, Html, Css, Javascript.

Por isso aqui está uma dica que pode te ajudar bastante:

* Foque em 1 coisa de cada vez, não adianta você querer aprender tudo de uma vez que você não vai conseguir, porém se você focar em apenas uma coisa e tente ser o melhor naquilo. 

Enfim não adiantou tentar estudar todas essas linguagens de programação se eu não estava focado, após ver um anúncio de uma escola de programação, resolvi fazer o desafio  que era um desafio de 1 semana codando em javascript usando os frameworks react-native, reactjs e nodejs. Mas aí o problema veio novamente, após o final de semana, o curso mais completo que eu precisaria para dar um up na minha carreira era pago e custava R$1900,00 que eu não tinha na época.

E aí mais algumas dicas:

* Você nunca vai precisar de dinheiro para aprender, sempre há boas soluções como youtube, stackoverflow, github entre outras ferramentas de aprendizagem grátis.

* Também é sempre bom pedir ajuda para pessoas que você conheça e já seja da área.

* Sempre dá pra usar soluções como o financiamento de cursos, para isso temos empresas como: [Provi](https://provi.com.br)  
`,
  `
## O que é um Swagger?

Você já deve ter visto sobre Swagger - uma das ferramentas mais utilizadas para o desenvolvimento de OpenAPI Specification(OAS). Para documentações Swagger é uma ferramenta extremamente poderosa, que auxilia desenvolvedores a documentar suas APIs de uma forma muito simples. O Swagger também consegue ler a estrutura e criar documentações automaticamente, assim como fazer o oposto: ler uma documentação e criar uma API.

Você também pode gerar especificações como: operações da API, parâmetros da API, retorno e autorizações necessárias, seja de forma manual ou automática, através de comentários no código.

Documentação [aqui](https://swagger.io/)
 
E Hoje vamos ver como criar uma documentação através de comentários no código.

Para começar vamos criar um projeto e iniciá-lo:

~~~shell
  mkdir swagger_app
  cd swagger_app
  yarn init -y
~~~

Após iniciar o projeto vamos criar a pasta source e instalar as bibliotecas iniciais:

~~~shell
yarn add express cors http nodemon typescript @types/node ts-node express-promise-router @types/express @types/cors
~~~

E criamos o arquivo root do projeto, nesse caso, o index.ts. Após isso, precisamos criar a configuração básica do express, como no exemplo

~~~ts
import express from "express";
import cors from "cors";
import http from "http";

import { routes } from "./routes/index";

const port = 5000;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

server.listen(port, () => {
  console.log('We are live on \${port}/');
  console.log('Environment: production');
});
~~~

Nosso routes/index se parece com isso:

~~~ts
import Router from "express-promise-router";

const routes = Router();

routes.get("/users", (req, res) => {
  return res.json("OK");
});

export { routes };
~~~

E estes são os scripts para rodar o projeto:

~~~json
"scripts": {
  "dev": "nodemon src/index.ts"
},
~~~

## Configurando Swagger

Adicionando as bibliotecas necessárias:

~~~shell
yarn add swagger-jsdoc swagger-ui-express @types/swagger-jsdoc @types/swagger-ui-express
~~~

Com isso, vamos inserir a configuração do Swagger no root do projeto. Depois é só importar as duas bibliotecas que baixamos:

~~~ts
import swaggerUI from "swagger-ui-express";
import swaggerJsDocs from "swagger-jsdoc";
~~~

E então adicionar as seguintes linhas:

~~~ts
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "Api documentation",
    },
    servers: [{ url: "https://localhost:5000" }],
  },
  apis: ["src/routes/*.ts"],
};

const specs = swaggerJsDocs(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
~~~

Agora rode o projeto e acesse [http://localhost:5000/docs](http://localhost:5000/docs), para você poder ver a tela inicial do swagger que é construído automaticamente.

Vamos então criar o nosso primeiro schema dentro de routes/index:

~~~ts
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         fullName:
 *           type: string
 *           description: The name of user
 *       example:
 *         id: 60ff3fe25a1209001eadefb5
 *         fullName: Alexander K. Dewdney
 */
~~~

Após isso os schemas que você criou já aparecem, aí finalmente pode documentar a nossa rota, adicionando as linhas:

~~~ts
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Return ok
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Return ok
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                "OK"
 */
~~~

Dessa forma, sua primeira documentação com Swagger foi feita.
`,
  `
## O que é o Socket.io?

Socket.io é um framework que auxilia na implementação de aplicações realtime, podendo ser usado no frontend e no backend, nesse artigo, vamos ver a implementação com ReactJs e NodeJs.

O Socket.io também é muito fácil de escalar, como é em tempo real, o chamamos de io intensive, ou seja, acontece muito io quando estamos utilizando o mesmo.

O Socket.io funciona basicamente com dois métodos: o de emitir e o de escutar. Ambos sempre recebem dois parâmetros, o evento e os dados. O evento de emitir é 'emit' e o de escutar e 'on', como no exemplo de emissão de uma mensagem:

# NodeJS

~~~ts
socket?.emit('message', { message: 'Hello' })
~~~

Da mesma forma temos o exemplo recebendo a mensagem emitida acima:

~~~ts
socket?.on('message', (response) => console.log(response)) // { message: 'Hello' }
~~~

Agora que estamos mais situados, do que é Socket.io e como ele funciona, vamos a implementação:

Primeiro vamos baixar as bibliotecas

~~~shell
yarn add socket.io express
~~~

Vamos então criar a estrutura básica do express:

~~~ts
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

server.listen(3000, () => {
  console.log('Server running in: 3000');
});
~~~

Se acessarmos [http://localhost:3000](http://localhost:3000) teremos a mensagem: "Hello world!", agora vamos ouvir toda vez que um usuário se conectar:

~~~ts
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

io.on('connection', (socket) => {
  console.log('User connected');
});

server.listen(3000, () => {
  console.log('Server running in: 3000');
});
~~~

O interessante desse on 'connection', é que podemos usar para criar status do usuário "online" ou "offline" de um usuário, onde ao se conectar inserimos seu status como "online" e ao se descontar inserimos seu status como "offline", como no exemplo abaixo:

~~~ts
// User online
io.on('connection', (socket) => {
  console.log('User connected')

  // User offline
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
~~~

Então, vamos emitir uma mensagem toda vez que um usuário saiu por exemplo:

~~~ts
io.on('connection', (socket) => {
  io.emit('message', 'Hi new user!')

  socket.on('disconnect', () => {
    io.emit('message', 'User desconnected')
  });
});
~~~

Assim temos todos os principais métodos a nível backend do Socket.io, mas caso queira conhecer mais, pode ver na documentação oficial [aqui](https://socket.io/docs/v4/server-installation/).

# ReactJs

Agora vamos para o React, onde o cliente vai ouvir essas atualizações em tempo real, porém como o socket trabalha com os dois lados, podemos enviar e receber mensagens de ambos os lados.

Vamos instalar a bibliotecas necessárias

~~~shell
yarn add socket.io-client react
~~~

Para executar o evento assim que o componente for renderizado, podemos usar useEffect como no exemplo:

~~~ts
import socketio from "socket.io-client";

const [messages, setMessages] = useState([])

useEffect(() => {
  async function SocketFunction() {
    const socket = socketio("http://localhost:3000");

    socket.on("message", (response) => {
      setMessages([...messages, response])
    });
  }

  SocketFunction();
}, []);
~~~

Com esse trecho de código, conseguimos ouvir toda vez que uma mensagem for enviado no backend, ou até mesmo no frontend, e da mesma forma podemos enviar mensagemos para o backend com socket.emit:

~~~ts
const socket = socketio("http://localhost:3000");

socket.emit("message", "Hello World!");
~~~

E por hoje ficamos por aqui, é realmente só isso a implementação com Socket.io, algo rápido e que possui basicamente 2 métodos principais, mas ao mesmo tempo é muito completa é poderosa, por isso vou deixar abaixo algumas referências que podem te ajudar com dúvidas populares

Consigo enviar parâmetros de autorização de um usuário? Como token JWT, email, senha...

Sim, conseguimos! [Aqui](https://stackoverflow.com/questions/13745519/send-custom-data-along-with-handshakedata-in-socket-io) você consegue ver como, usando handshake query.

Consigo enviar uma mensagem somente para um usuário?

Sim, inclusive consegue personalizar e enviar para todos menos para quem enviou entre outros, todos os principais métodos estão aqui: 

* [https://socket.io/docs/v3/broadcasting-events/](https://socket.io/docs/v3/broadcasting-events/)
* [https://socket.io/docs/v3/rooms/](https://socket.io/docs/v3/rooms/)
* [https://socket.io/docs/v3/emit-cheatsheet/](https://socket.io/docs/v3/emit-cheatsheet/)
`,
] as Array<string>
