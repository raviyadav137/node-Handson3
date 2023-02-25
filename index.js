const express = require('express');
const router=express.Router();
const app = express();

const GlobalMiddleWare = (req, res, next) => {
    console.warn("Current Route is",req.originalUrl)
    next();
}

const routemiddleware = (req, res, next) => {
    console.log("we are in routemiddleware");
    console.log("Current Route is",req.originalUrl)
     next();
}

 
app.use(GlobalMiddleWare);

app.get('/', (req, res) => {
    res.send('This is Home page');
});

router.get('/login',routemiddleware, (req, res) => {
       res.send('This is Login page')
})

app.get('/about', (req, res) => {
      res.send('this id About page')
})
app.use('/',router)
app.listen(4000, () => {
    console.log('Server started')
})