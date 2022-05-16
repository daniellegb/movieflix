# DS Movie
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/daniellegb/movieflix/blob/main/LICENSE)

# Sobre o projeto

https://daniellegb-movieflix.netlify.app/

DS Deliver é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um sistema que armazena e exibe avaliações sobre filmes previamente catalogados no banco de dados. Apenas usuários membros podem deixar comentários, usuários visitantes podem apenas lê-los.

## Logins fantasia para acesso

Ana (membro):
- login: ana@gmail.com
- senha: 123456
Bob (visitante):
- login:bob@gmail.com
- senha: 123456

## Layout web
![Web 1](https://github.com/daniellegb/movieflix/blob/main/assets/tela1.PNG)

![Web 2](https://github.com/daniellegb/movieflix/blob/main/assets/tela2.PNG)

![Web 3](https://github.com/daniellegb/movieflix/blob/main/assets/tela3.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/daniellegb/movieflix/blob/main/assets/modelo%20conceitual.png)

## Padrão de camadas adotado
![Padrão de Camadas Adotado](https://github.com/daniellegb/movieflix/blob/main/assets/padrao-camadas.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth2 / JWT
- JUnit
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/daniellegb/movieflix

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/daniellegb/movieflix

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
