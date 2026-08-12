import express from "express";
import { clientRouter } from "./client/client.routers.js";

const app = express();
app.use(express.json()) //Middleware


app.use('/api/clients', clientRouter) //Usa clientRouter para manejar las peticiones que llegan a esa ruta (get, put, patch, etc.)


//Por si ingresa mal a la url (notar que no hay ninguna ruta)
app.use((_,res) => {
    return res.status(404).send({message: "Resource not found"})
})

app.listen(3000, ()=> {console.log("Server is runing on http://localhost:3000/")});



