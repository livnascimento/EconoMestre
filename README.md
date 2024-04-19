# EconoMestre

![Static Badge](https://img.shields.io/badge/status-em%20desenvolvimento-blue?style=for-the-badge)

O **EconoMestre** é um sistema de consultoria financeira, projetado para oferecer soluções personalizadas e eficazes. Este projeto será desenvolvido ao longo do treinamento da Impacta promovido pela Avanade para os estagiários do programa Decola Tech 2024.

## ℹ️ Visão Geral

Este sistema permite que consultores financeiros qualificados se conectem com clientes que buscam orientação financeira, proporcionando um ambiente seguro e confiável para ambos os lados.

## 👩🏼‍💻 Como utilizar

1. Com a pasta do projeto já aberta, instale as dependências rodando o comando:

    ```bash
    npm i
    ```

2. Para iniciar o projeto, execute o script:

    ```bash
    npm start
    ```

3. Utilize um aplicativo como o Insomnia ou o Postman para navegar pelos Endpoints.

## 📑 Regras de Negócio

### 1. Cadastro e Validação dos Consultores Financeiros

- **Cadastro**: Os consultores interessados devem realizar um cadastro completo no sistema.
- **Validação**: É necessário o envio de documentação comprobatória da qualificação profissional para garantir a prestação de serviços de alta qualidade.

### 2. Disponibilidade dos Consultores

- **Agenda**: Cada consultor deve informar sua disponibilidade, indicando os dias e horários específicos para atendimento.
- **Flexibilidade**: O sistema permite atualizações constantes para refletir mudanças na disponibilidade.

### 3. Registro dos Clientes

- **Cadastro de Clientes**: Antes de agendar consultas, os clientes precisam se registrar no sistema.
- **Perfil do Cliente**: Informações relevantes sobre a situação financeira do cliente podem ser adicionadas para personalizar a experiência.

### 4. Transações Financeiras

- **Métodos de Pagamento**: Após a confirmação do serviço, os clientes devem registrar um método de pagamento preferencial.
- **Segurança**: O sistema utiliza protocolos de segurança para proteger as informações financeiras dos usuários.

### 5. Gerenciamento de Agendas

- **Agendamento**: Os clientes podem agendar reuniões com base na disponibilidade dos consultores.
- **Reagendamento e Cancelamento**: O sistema oferece flexibilidade para alterar ou cancelar reuniões conforme necessário.

## 📌 Endpoints

### Meeting

- `POST /meeting`: Cria uma nova reunião. 

    **Exemplo de requisição**

    ```json
    {
        "id_consultant": 0,
        "id_client": 0,
        "date": "05-22-2024 13:00"
    }
    ```
- `PUT /meeting/:id`: Atualiza uma reunião existente.

    **Exemplo de requisição**

    ```json
    {
        "id_consultant": 0,
        "id_client": 0,
        "date": "05-20-2024 13:00"
    }
    ```
- `DELETE /meeting/:id`: Exclui uma reunião.

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```
- `GET /meeting/:id_consultant`: Obtém reuniões por ID do consultor
    
    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```
- `GET /meeting`: Obtém todas as reuniões. Controller: `getMeeting`.
    
    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

### Client

- `POST /client`: Cria um novo cliente. 

    **Exemplo de requisição**

    ```json
    {
        "name": "José",
        "cpf": "12345678901",
        "email": "jose@client.com",
        "password": "123456"
    }
    ```

- `GET /client/:id`: Obtém um cliente por ID. 

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

- `GET /client`: Obtém todos os clientes.

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

- `PUT /client/:id`: Atualiza um cliente existente.

    **Exemplo de requisição**

    ```json
    {
        "name": "José Silva",
        "cpf": "123456789",
        "email": "jose.silva@client.com",
        "password": "123456"
    }
    ```

- `DELETE /client/:id`: Exclui um cliente.

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

### Consultant

- `POST /consultant`: Cria um novo consultor. 
    
    **Exemplo de requisição**

    ```json
    {
        "name": "Maria",
        "cnpi": "123456789",
        "email": "maria@consultant.com",
        "password": "123456"
    }
    ```

- `GET /consultant/:id`: Obtém um consultor por ID. 

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

- `GET /consultant`: Obtém todos os consultores. 

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

- `PUT /consultant/:id`: Atualiza um consultor existente.

    **Exemplo de requisição**

    ```json
    {
        "name": "Maria Santos",
        "cnpi": "123456789",
        "email": "maria.santos@consultant.com",
        "password": "123456"
    }
    ```

- `DELETE /consultant/:id`: Exclui um consultor. 

    **Exemplo de requisição**

    ```json
    // Sem corpo na requisição
    ```

---

Obrigada por visitar meu projeto! 🧡
