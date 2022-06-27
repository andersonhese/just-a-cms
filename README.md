# just a cms
let's build a little CMS with node.

https://en.wikipedia.org/wiki/Content_management_system

------------

#### Technologies:

[Nodejs](https://nodejs.org/en/ "Nodejs"), [TypeScript](https://www.typescriptlang.org/ "TypeScript"), [Docker](https://www.docker.com/ "Docker"), [TypeORM](https://typeorm.io/ "TypeORM"), [MySQL](https://www.mysql.com/ "MySQL"), [MongoDB](https://www.mongodb.com "MongoDB"), [Redis](https://redis.io/ "Redis")

------------

#### How to install:

1. Clone the repository (main branch).
2. Run `npm install` or `yarn`, to install project dependencies.
3. [Install docker](https://hub.docker.com/ "Install docker").
4. Run `docker-compose up`, to install MySQL, MongoDB & Redis.
5. Run `npx typeorm-ts-node-commonjs migration:run -d ./src/database/connection.ts`, to create all MySQL tables.
6. Create `.env` file (see `.env.template`, in main folder).
7. Execute `npm run dev` or `yarn dev` & open the link (in console).

------------

#### CMS Content
[  ] - Post Management
&nbsp; &nbsp; [  ] - List
&nbsp; &nbsp; [  ] - New / Edit
&nbsp; &nbsp; [  ] - Publish
[  ] - User Management
&nbsp; &nbsp; [  ] - List
&nbsp; &nbsp; [  ] - New / Edit
&nbsp; &nbsp; [  ] - Publish
[  ] - 