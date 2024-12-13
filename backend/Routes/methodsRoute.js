const express = require('express');
const router = express.Router();

const {bisection , regulaFalsi , newtonRaphson , secant} = require('../Controllers/methodsController');

router.get("/" , (Req , res) => {
    res.json("METHODS !");
})

router.post("/bisection" , bisection);
router.post("/regulaFalsi" , regulaFalsi);
router.post("/newtonRaphson" , newtonRaphson);
router.post("/secant" , secant);

module.exports = router;