import express from 'express'
import cors from 'cors';
import PublicRoutes from './routes/PublicRoutes.js';
import PrivateRoutes from './routes/PrivateRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

// localhost:8000
app.get('/', function (request, response) {
  return response.send("Servidor executando");
});

// AQUI SERÃO AS ROTAS PUBLICAS
app.use(PublicRoutes);

// ABAIXO SERÃO AS ROTAS PRIVADAS MIDDLEARE
app.use(PrivateRoutes);

app.listen(8000, () => {
  console.log("Servidor executando");
})