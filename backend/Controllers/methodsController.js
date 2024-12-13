const { re } = require('mathjs');
const {bisectionMethod , regulaFalsiMethod , newtonRaphsonMethod , secantMethod , iterationMethod} = require('../utils/calcMethods');

module.exports.bisection = (req , res) => {
    const { expression , range } = req.body;

    try{
        const result = bisectionMethod(expression , range); // array of object
        res.json({success : true , method : 'Bisection' , iterations : result})
    }catch(err){
        console.log(err);
    }
}


module.exports.regulaFalsi = (req , res) => {
    const { expression , range } = req.body;

    try{
        const result = regulaFalsiMethod(expression , range); 
        res.json({success : true , method : 'Regula Falsi' , iterations : result})
    }catch(err){
        console.log(err);
    }
}


module.exports.newtonRaphson = (req , res) => {
    const { expression , range } = req.body;

    try{
        const result = newtonRaphsonMethod(expression , range); 
        res.json({success : true , method : 'Newton-Raphson' , iterations : result})
    }catch(err){
        console.log(err);
    }
}

module.exports.secant = (req , res) => {
    const { expression , range } = req.body;

    try{
        const result = secantMethod(expression , range); 
        res.json({success : true , method : 'Secant' , iterations : result})
    }catch(err){
        console.log(err);
    }
}
