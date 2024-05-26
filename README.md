Bem vindo(a) ao nosso ReadMe!

Nosso Website terá como objetivo realizar uma junção de duas coisas queridas entre os gamers: fóruns e reviews.

Ao criar uma conta você tera acesso inicialmente a uma página na qual conterá um fórum com todos os jogos registrados
em nosso Website e neles suas respectivas avaliações gerais, você poderá avaliar o jogo, fazendo com que sua avaliação 
geral mude (ou não, dependendo da quantidade de avaliações), poderá também adicionar novos jogos na lista do fórum.

Caso você clique em algum dos jogos você entrará na página dele, na qual poderá interagir com outros usuários comentando
nas discussões criadas por eles ou criando sua própria discussão.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[NPM](npm install), [GitBash](https://git-scm.com/downloads), [NVM](nvm install 20.10.0)
Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Iniciando o WebSite

Para inicializar o nosso WebSite, após ter clonado nosso repositório via git clone, você terá
que executar ng serve -o dentro da pasta raiz do projeto e após abrir o WebSite realizar o login
caso tenha um registro, caso não tenha realizar o registro. Assim você estara livre pelo mundo 
de ReviewMaster.

### :globe_with_meridians: Mapa do Projeto
<p id="mapaprojeto" align="left">Abaixo segue a estrutura de pastas e suas definições:</p>
 
```bash
├── src					            // Pasta raiz com a estrutura do projeto
│  └── Adapter                      // Pasta para criar os serviços de comunicação / Ports & Adpters
│       └── Provider                // Pasta com o projeto de API
│   └── Core                        // Pasta com os princípais serviços do projeto
│       └── Application             // Pasta com o projeto para o mapeamento das entidades entre domain e serviços
│          └── Mapper               // Pasta com os mappers entre viewmodel e entidade
│          └── ViewModel            // Pasta com os objetos de ViewModel / DTO
│       └── Domain                  // Pasta com organização das entidades Domínio do projeto
│          └── Interfaces           // Pasta com os contratos expostos pelo Domínio
│          └── Models               // Pasta com organização das Entidades e Serviços usando CQRS
│          	└── Commands            // Pasta com os comandos e handler CQRS
│          	└── Entities            // Pasta com entidades
│          	└── Events              // Pasta com os eventos
│          └── Query                // Pasta com as querys e handler CQRS
│   └── Infrastructure              // Pasta com projeto de infrastructure e configurações de acesso a banco
│       └── Mappings                // Pasta com Mappings usando fluent das entidades para o banco
│       └── Migrations              // Pasta com as Migrations aplicadas / a serem aplicadas
│       └── Repository              // Pasta com contexto e configuração do objeto de repository das entidades
├── tests				            // Pasta com projeto de testes unitários do microserviço
```

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

[Angular17](npm i -g@angular/cli)
[TypeScript](npm i typescript -D)
[NPM](npm install) 
[NVM](nvm install 20.10.0)
