# Projeto Todo List

Este repositório contém dois projetos: um backend simples utilizando `json-server` e um frontend em React com TypeScript.

## Estrutura do Repositório

- `./todo-list-back`: Contém o código do backend.
- `./todo-list-front`: Contém o código do frontend.

## Pré-requisitos

- Node.js instalado na máquina.
- npm ou yarn como gerenciador de pacotes.

## Instruções para Executar o Backend

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
    npx json-server --watch db.json --port 3001
    ```

    O servidor estará disponível em `http://localhost:3001`.

## Instruções para Executar o Frontend

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

## Configuração Adicional

Certifique-se de que o frontend está configurado para fazer requisições para o backend na porta correta (`http://localhost:3001`). Verifique o arquivo de configuração ou o código onde a URL do backend é definida.

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.