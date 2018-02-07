const express = require('express');
const app = express();

console.log('OK')

app.get('/', (req,res)=>{
    res.send('Hello hermanos')
})

console.log('ani nasma3 fik mli7');
app.listen(3000);