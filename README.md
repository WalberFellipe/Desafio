# Documentação
Projeto é um teste prático feito para a etapa final do processo seletivo.

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

O .env não há necessidade de ser configurado manualmente pois já está presente no repositório.

## 3. Iniciar containers
Após a instalação basta iniciar os containers com:
```sh
docker-compose up -d
```

Ele iniciará os seguintes processos

- Backend: Laravel PHP-FPM service na porta 9000
- Frontend: SvelteKit development server na porta 3000
- Postgres: PostgreSQL database na porta 5432
- pgAdmin: Database administration tool na porta 8081
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
```sh
docker exec -it backend php artisan migrate --seed
```
Com isso ele irá gerar as tabelas automaticamente e também irá gerar o usuário com o seguinte e-mail e senha para acesso aos ambientes:
```
e-mail: user@email.com
password: 123456
```

## 6.Mobile

O App roda fora do container então é necessário acessar a sua pasta e executá-lo individualmente
```
cd mobile
npm run dev
```

Outro ponto de atenção é: Pode ser que exista problema pra comunicar com a API pelo APP, pra isso recomendo acessar o gateway do mesmo e colocar na api

![image](https://github.com/user-attachments/assets/d0e34c8b-2898-44ea-91bf-069cf8cc61b5)


Local onde deverá ser substituido pelo seu IP
`mobile\src\services\api.ts`
Linha 14:  `const url = "http://10.0.2.2/api";`


## Solução de Problemas

- Conflito de portas: Garanta que não existe outro serviço usando as portas `80`, `3000`, `5432`, ou `9000`.
- Logs: Cheque os logs individuais de cada serviço:
  
```sh
docker logs frontend
docker logs backend
docker logs nginx
docker logs postgres
```

## Horas totais gastas
```
Configurar todo o Ambiente com Docker - 3 Horas
Criação de schemas direto no pgAdmin - 30 minutos
Criação da camada de autenticação no back-end - 2 horas
Criação do MVC das tarefas + seeders - 4 horas
Criar App Mobile - 3 horas
Criar App Web - 4 Horas
```
Tempo total gasto: 16 Horas e 30 Minutos

## Tecnologias e Conceitos Usados

Laravel, Breeze, SOLID, PostgreSQL, pgAdmin, Docker, React Native, React Hooks, React Custom Hooks,
Axios(Mobile e Web), Expo, Android Studio, React Hook Form, Svelte, SvelteKit, Prettier.

## Board do projeto

https://github.com/users/WalberFellipe/projects/2

## Problemas conhecidos
Pode haver problema de estilização e quebras de tela por conta de este projeto não ter uma responsividade. Sendo assim, em diferentes dispositivos ele pode se apresentar de diferentes formas.

Se precisar de mais detalhes ou ajustes, estou à disposição! 
