# App

Aplicativo com um feed de postagens.

## Iniciando o projeto

Para iniciar o projeto certifique-se de ter a ferramenta [Docker](https://www.docker.com) instalada em sua máquina, então execute o comando `docker compose up --build` a partir do diretório raiz do projeto.
Também é importante criar o arquivo `.env` deve possuir apenas duas váriaveis: `MONGO_URL` que é a string de conexão do MongoDB e `AUTH_SECRET` que pode ser qualquer sequencia de caracteres.

## Stack utilizada

### Principal

O mais importante framework desse projeto é o [NextJS](https://nextjs.org) que é feito em cima de outra biblioteca chamada [React](https://react.dev). Através dele foi criado tanto o front-end quando o back-end, utilizando o conceito de [diretivas](https://nextjs.org/docs/app/api-reference/directives).

### Banco de dados

O banco de dados escolhido foi o [MongoDB](https://www.mongodb.com) por ser um banco de dados simples e poderoso. A estrutura de dados desse projeto combina perfeitamente com a natureza documental baseada em JSON do MongoDB.

### Validação de dados

A biblioteca [Zod](https://zod.dev) é utilizada para validação de dados pelo facilidade de uso, desempenho e alta compatibilidade com Typescript.

### Estilização

A estilização foi criada utilizando somente a biblioteca [Styled Components](https://styled-components.com) juntamente com o conceito de Design System.

### Gerenciamento de estado

O gerencialmento de estado da aplicação foi feito utilizando apenas recursos internos do React como Context API e useReducer.

## Próximos passos

1. Alterar/criar estrutura de likes e comentários e passar a adotar os padrões Bucket Pattern e Computed Pattern.
2. Definir índices e adicioná-los de forma programática
3. Integrar serviço de armazenamento em núvem (como S3), para salvar imagem de postagens e usuários.
4. Integrar serviço de email (SendGrid).
5. Melhorar design e deixar responsivo.
6. Revisar todos CRUDs.
