
//just a bunch of 'em for giggles...
exports.add = add;
exports.sub = sub;
exports.min = min;
exports.max = max;
exports.srnd = seed;
exports.rnd = rand;
exports.mod = mod;
exports.div = divide;
exports.mul = multiply;
exports.fac = factorial;

var xseed = 0;

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function min(a, b){
    return a < b ? a : b;
}

function max(a, b){
    return a > b ? a : b;
}

function seed(a){
    xseed = a;
}

function rand(){
   return xseed = (16807 * xseed) % 2147483647; 
}

function mod(a, b){
    return a % b;
}

function divide(a, b){
    if(b == 0) return 0;
    
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function factorial(n){
    return n <= 1 ? 1 : factorial(n-1) * n;
}