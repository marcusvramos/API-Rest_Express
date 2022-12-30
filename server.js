import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});

// -->biblioteca NODEMON para Live Reload<-- "dev": "nodemon server.js"
// ' npm install nodemon -D ' <-- -D para dependência de Desenvolvimento
