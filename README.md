Bem vindo(a) ao nosso ReadMe!

Nosso Website terá como objetivo realizar uma junção de duas coisas queridas entre os gamers: fóruns e reviews.

Ao criar uma conta você tera acesso inicialmente a uma página na qual conterá um fórum com todos os jogos registrados
em nosso Website e neles suas respectivas avaliações gerais, você poderá avaliar o jogo, fazendo com que sua avaliação 
geral mude (ou não, dependendo da quantidade de avaliações), poderá também adicionar novos jogos na lista do fórum.

Caso você clique em algum dos jogos você entrará na página dele, na qual poderá interagir com outros usuários comentando
nas discussões criadas por eles ou criando sua própria discussão.

### :bookmark_tabs: Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [NPM](**npm install**)
- [GitBash](https://git-scm.com/downloads)
- [NVM](**nvm install 20.10.0**)
- [Angular](**npm install -g @angular/cli@latest**)

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### :rocket: Iniciando o WebSite

Para inicializar o nosso WebSite, após ter clonado nosso repositório via git clone, você terá
que executar **ng serve -o** dentro da pasta raiz do projeto e após abrir o WebSite realizar o login
caso tenha um registro, caso não tenha realizar o registro. Assim você estara livre pelo mundo 
de ReviewMaster.

### :globe_with_meridians: Mapa do Projeto
<p id="mapaprojeto" align="left">Abaixo segue a estrutura de pastas e suas definições:</p>
 
```bash
├──.vscode                  // Extemsões do VSCode
├──public                   // Pasta pública (Irei excluir)
├── src					            // Pasta raiz com a estrutura do projeto
│  └── App                  // Pasta aonde contém todos componentes do WebSite
│  └── index.html           // Index geral
│  └── main.server.ts       // Inicializa o WebSite? (Verificar depois certinho)
│  └── main.ts              // Inicializa o WebSite (Verificar depois certinho)
│  └── styles.scss          // Styles Sheets geral
├──.editorconfig            // Plugin que padroniza o estilo de código para IDEs
├──.env                     // Gerenciador de váriaveis
├──.gitignore               // Arquivo que define o que vai subir com o push
├──README.md                // Arquivo que explica como funciona tudo
├──angular.json             // Fornece valores padrões de configuração para o espaço de trabalho
├──package-lock.json        // Contem as dependências instaladas no projeto.
├──package.json             // Contem as dependências, a versão, o autor e a licença.
```

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Angular17](**npm i -g@angular/cli**)
- [TypeScript](**npm i typescript -D**)
- [NPM](**npm install**) 
- [NVM](**nvm install 20.10.0**)
- [API](https://github.com/techiediaries/node-mongoose-jwt)
