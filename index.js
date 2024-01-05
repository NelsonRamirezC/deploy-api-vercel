const app = require ("./app/server.js")

const PORT = process.env.PORT || 3000;

const main = () => {
    app.listen(PORT, () => {
        console.log("servidor escuchando en http://localhost:"+PORT)
    })

}

main();