# Projeto Todo List

Este repositório contém dois projetos: um backend simples utilizando `json-server` e um frontend em React com TypeScript. Este projeto foi desenvolvido exclusivamente para fins didáticos na disciplina de Programação para Web 2 do Curso de Sistemas para Internet da UNCISAL, semestre letivo 2024.2.

## Estrutura do Repositório

- `./todo-list-back`: Contém o código do backend.
- `./todo-list-front`: Contém o código do frontend.

## Pré-requisitos

- Node.js instalado na máquina.
- npm ou yarn como gerenciador de pacotes.

## Executando Diretamente no Sistema Operacional

### Instruções para Executar o Backend

1. Navegue até o diretório do backend:
    ```sh
    cd ./todo-list-back
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Inicie o servidor:
    ```sh
    npx json-server --watch db.json --port 3334
    ```

    O servidor estará disponível em `http://localhost:3334`.

### Instruções para Executar o Frontend

1. Navegue até o diretório do frontend:
    ```sh
    cd ./todo-list-front
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

    O aplicativo estará disponível em `http://localhost:3000`.

## Executando com Docker

### Instruções para Executar com Docker Compose

1. Certifique-se de ter o Docker e o Docker Compose instalados na máquina.

2. No diretório raiz do projeto, execute o comando:
    ```sh
    docker-compose up
    ```

    O backend estará disponível em `http://localhost:3334` e o frontend em `http://localhost:3001`.

## Configuração Adicional

Certifique-se de que o frontend está configurado para fazer requisições para o backend na porta correta (`http://localhost:3334`). Verifique o arquivo de configuração ou o código onde a URL do backend é definida.
