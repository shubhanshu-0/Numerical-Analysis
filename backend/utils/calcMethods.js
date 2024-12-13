const math = require('mathjs');
// const math = create(all);

const findRange = (expression) => {
    let a = -100 , b = 100;

    while(b-a > 1){
        let mid = Math.floor((b-a)/2 + a);
        let calc = evaulateExpression(expression , mid);
        if(calc == 0){
            return [mid , mid];
        }else if(calc < 0){
            a = mid;
        }else b = mid;
    }
    return [a , b];
}


const bisectionMethod = (expression , range) => {
    const iterations = [];
    iterations.push({
        step : "Step", 
        x : "Mid = (a+b)/2" , 
        f_x : "F(MID)"
    })
    let mid;
    if(range.length == 0){
        range = findRange(expression);
    }
    let [a , b] = range;

    for(let i = 0 ; i < 10 ; i++){
        mid = (a+b)/2;
        mid = Number(mid.toFixed(6));

        let f_mid = evaulateExpression(expression , mid);
        iterations.push({
            step : i+1 ,
            x : mid , 
            f_x : f_mid 
        });
        if(f_mid <= 0)  a = mid;
        else b = mid;
    }
    return iterations;
}

const regulaFalsiMethod = (expression , range) => {
    const iterations = [];
    iterations.push({
        step : "Step" , 
        x : "c = (a*F(b)-b*F(a)) / (F(b) - F(a)) " , 
        f_x : "F(c)"
    })
    if(range.length == 0){
        range = findRange(expression);
    }
    let [a , b] = range;

    let f_a = evaulateExpression(expression , a);
    let f_b = evaulateExpression(expression , b);

    for(let i = 0 ; i < 10 ; i++){
        f_a = evaulateExpression(expression , a);
        f_b = evaulateExpression(expression , b);
        if(f_a*f_b >= 0)  return iterations;

        let c = (a*f_b - b*f_a) / (f_b - f_a);
        c = Number(c.toFixed(6));
        
        let f_c = evaulateExpression(expression , c);

        if(f_c < 0) a = c;
        else b = c;

        iterations.push({
            step : i+1 , 
            x : c , 
            f_x : f_c
        })
    }
    return iterations;
}

const newtonRaphsonMethod = (expression , range) => {
    const iterations = [];
    iterations.push({
        step : "Step" , 
        x : "Xn+1 = Xn - F(Xn)/F'(Xn)" , 
        f_x : "F(X)"
    })
    if(range.length == 0){
        range = findRange(expression);
    }
    //check , whose closer the value of expression is
    const [a , b] = range;

    let f_a = evaulateExpression(expression , a);
    let f_b = evaulateExpression(expression , b);
    let x0 = (Math.abs(f_a - 0) < Math.abs(f_b - 0) ? a : b);
    x0 = Number(x0.toFixed(6));
    let d_expression = math.derivative(expression , 'x').toString();
    
    iterations.push({
        step : `X0` ,
        x : x0 , 
        f_x : evaulateExpression(expression , x0)
    })

    for(let i = 0; i < 10 ; i++){
        let f_x0 = evaulateExpression(expression , x0);
        let d_f_x0 = evaulateExpression(d_expression , x0);

        let x1 = x0 - (f_x0)/(d_f_x0);

        x1 = Number(x1.toFixed(6));

        iterations.push({
            step : `X${i+1}` ,
            x : x1 ,
            f_x :  evaulateExpression(expression , x1)
        })

        if(x0 == x1)    break;

        x0 = x1;
    }
    return iterations;
}

const secantMethod = (expression , range) => {
    const iterations = [];
    iterations.push({
        step : "Step" , 
        x : "Xn+1 = (Xn-1*F(Xn)-Xn*F(Xn-1)) / (F(Xn) - F(Xn-1)) " , 
        f_x : "F(x)"
    })
    if(range.length == 0){
        range = findRange(expression);
    }
    let [a , b] = range;

    let f_a = evaulateExpression(expression , a);
    let f_b = evaulateExpression(expression , b);

    for(let i = 0 ; i < 10 ; i++){
        f_a = evaulateExpression(expression , a);
        f_b = evaulateExpression(expression , b);
        if(f_a == f_b)  return iterations;
        
        let c = (a*f_b - b*f_a) / (f_b - f_a);
        c = Number(c.toFixed(6));
        
        let f_c = evaulateExpression(expression , c);

        a = b;
        b = c;

        iterations.push({
            step : i+1 , 
            x : c , 
            f_x : f_c
        })
    }

    return iterations;
}


const evaulateExpression = (expression , x) => {
    let scope = {x : x};
    let f_x = math.evaluate(expression , scope);
    f_x = Number(f_x.toFixed(6));
    return f_x;
    // return eval(expression.replace('x' , x));
}

module.exports = {
    bisectionMethod , 
    regulaFalsiMethod , 
    newtonRaphsonMethod ,
    secantMethod
};