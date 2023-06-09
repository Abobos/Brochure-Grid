## Bronchure-Grid

### Implementation Details

### Project Structure

Overall, the project is designed to be scalable, maintainable and extensible. The use of a monorepo architecture

#### Architecture

The project adopts a monorepo approach, which comprises of two services located in the apps folder:

Please refer to the architectural diagram below for a better understanding.

### Development

#### Tools

- TypeScript
- Node js
- Express js
- Next js
- Strapi
- PostgreSQL

### Running the Service

#### Docker

- Install [Docker](https://www.docker.com/)
- Run `docker-compose up -d`. But If you like to see those clumsy logs 😬, RUN `docker-compose up`
- Open browser and visit `http://localhost:3000/graphql` and rock it

#### Without Docker

- Replace database_url in .env with your corresponding valid database url 👌
- Run `yarn install` to install project dependencies

#### Test

```
yarn test
```

### Production Packaging

```

```

### Improvement Points
