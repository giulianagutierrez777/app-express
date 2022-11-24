const express = require('express')
const app = express();
const port = 3030

app.listen(3030 , () => console.log(`Servidor levantado en el puerto ${port}`))