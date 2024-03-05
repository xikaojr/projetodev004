const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const dbFilePath = path.join(__dirname, 'db.json');
app.use(cors());
app.use('/api/animais', express.static(dbFilePath));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});