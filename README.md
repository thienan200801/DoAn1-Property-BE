# NestJs REST API tutorial for FreeCodeCamp

### Run the API in development mode

```javascript
yarn // install
yarn db:dev:restart // start postgres in docker and push migrations
yarn start:dev // start api in dev mode
```

deploy ---
error with postgres admin
https://stackoverflow.com/questions/64781245/permission-denied-var-lib-pgadmin-sessions-in-docker

## start source step by step

1. cp .env.template .env
2. run db: docker compose up -d postgres_db
3. yarn prisma:dev:deploy --> initial schema
4. npx prisma migrate dev --> migrate schema
5. yarn start:dev
6. create admin user using api auth/signup on swagger ui
   ```
    {
        "email" :"novapo@gmail.com",
        "password" :"novapo"
    }
   ```
7. when update schema.prisma, run: npx prisma migrate dev
