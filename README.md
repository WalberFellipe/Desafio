# Documentação
Node, Docker, Docker-compose, Composer, php

# Pré-requisitos

Antes de iniciar você irá precisar ter instalado na sua máquina:

- [NodeJS](https://nodejs.org/pt)
- [Docker e docker-compose](https://docs.docker.com/)
- [Composer](https://getcomposer.org/)
- [php](https://www.php.net/)

# Instalação

## 1. Clone o repositório
Clone o repositório para a sua máquina

```sh
git clone https://github.com/WalberFellipe/Desafio.git
cd Desafio
```

## 2. Faça o build usando docker
Finalizado a clonagem do projeto, use o comando abaixo para que ele faça a instalação tanto do back-end quanto do front-end e do banco de dados.

```sh
docker-compose build
```

`⚠️ Caso a pasta 'vendor' não seja gerada no back-end e você se depare com um erro ao acessar localmente, acesse a pasta do back-end e faça a instalação manual`

```sh
cd backend
composer install --optimize-autoloader --no-dev
```

O .env não há necessidade de ser gerado, já está presente no repo.

## 3. Iniciar containers
Após a instalação basta iniciar os containers com:
```sh
docker-compose up -d
```

Ele iniciará os seguintes processos

- Backend: Laravel PHP-FPM service na porta 9000
- Frontend: SvelteKit development server na pora 3000
- Postgres: PostgreSQL database na porta 5432
- pgAdmin: Database administration tool na pora 8081
- nginx: Web server na porta 80

## 4. Acessando a aplicação

- Frontend: Abra seu browser e vá para http://localhost:3000
- Backend: Abra seu browser e vá para http://localhost
- pgAdmin: Abra seu browser e vá para http://localhost:8081

## 5. Banco de dados

Abaixo está o script que foi usado para gerar os schemas

```sql
CREATE TABLE Users (
    Id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    IsActive BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE TasksStatus (
    Id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Key VARCHAR(100) NOT NULL UNIQUE,
    Description VARCHAR(255) NOT NULL
);

CREATE TABLE Tasks (
    Id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Status UUID NOT NULL,
    FOREIGN KEY (Status) REFERENCES TasksStatus(Id)
);

INSERT INTO TasksStatus (Id, Key, Description) VALUES
('TO_DO', 'Pendente'),
('IN_PROGRESS', 'Em Andamento'),
('DONE', 'Concluída');
```

Mas não é necessário rodar este script novamente, basta rodar o comando abaixo:
`docker exec -it backend php artisan migrate --seed`
Com isso ele irá gerar as tabelas automaticamente e também irá gerar o usuário com o seguinte e-mail e senha para acesso aos ambientes:
```
e-mail: user@email.com
password: 123456

```

## Solução de Problemas

- Conflito de portas: Garanta que não outro serviço usando as portas `80`, `3000`, `5432`, ou `9000`.
  
- Logs: Cheque os logs individuais de cada serviço:
  
```sh
docker logs frontend
docker logs backend
docker logs nginx
docker logs postgres
```