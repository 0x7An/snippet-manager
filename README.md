# A manager made with nodejs for code snippets

#Stack
   `"bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "connect-flash": "^0.1.1",
    "connect-session-sequelize": "^5.2.2",
    "express": "^4.16.3",
    "express-session": "^1.15.6",
    "highlight.js": "^9.12.0",
    "markdown-it": "^8.4.2",
    "method-override": "^3.0.0",
    "nunjucks": "^3.1.3",
    "pg": "^7.4.3",
    "sequelize": "^4.38.0"`

![alt text](https://raw.githubusercontent.com/andersondsl/snippets/master/app/public/show.png)

#Setup

- Intall node 9.11.1
- Clone this github repository
- Run `npm install` on root folder to install the necessary dependencies listed on package.json
- Go to config/database.js file and setup your database, i'm using postgres as default
- Create a database on your local machine with the name given on the configuration file
- On your terminal run, `node_modules/.bin/sequelize db:migration` on the root folder
- Start the application with `npm start`and check out https://localhost:3000
