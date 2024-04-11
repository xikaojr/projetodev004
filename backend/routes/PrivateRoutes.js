import express from 'express'
import jwt from 'jsonwebtoken';
import UsuariosRoutes from './UsuariosRoutes.js';
import ProdutosRoutes from './ProdutosRoutes.js';
import DespesasRoutes from './DespesasRoutes.js';
import ReceitasRoutes from './ReceitasRoutes.js';
// RELACAO DE ROTAS PRIVADAS
const PrivateRoutes = express.Router();

// MIDDLEWARE
PrivateRoutes.use(function(request, response, next){
    let logged = false
    const token = request.headers.token;
    if(token) {
        try {
            const tokenDecifrado = jwt.verify(token, 'sis-iw-0928eji0ici43083-90k494830-94398');
            if(tokenDecifrado) {
                logged = true;
            }
        } catch(e) {
            return response.json(e);
        }
    }
    if(logged === false) {
        return response.json({'message': 'Token inválido'})
    }
    next();
});

PrivateRoutes.use(UsuariosRoutes);
PrivateRoutes.use(ProdutosRoutes);
PrivateRoutes.use(DespesasRoutes);
PrivateRoutes.use(ReceitasRoutes);

export default PrivateRoutes;