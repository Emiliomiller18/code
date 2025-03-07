/* FUNCINES SIN PARAMETROS */
/*function presentacion(){
    alert('sin parametros')
}
presentacion();
let inicio = () => alert('sin parametros f.flecha');
inicio();*/

/* funcion con parametros */
/*function suma(a,b){
    alert('con parametros'+(a+b))
}
suma(5,6);
let sumar=(a,b)=>alert('con parametros f.flecha'+(a+b))
sumar();*/

/* funcion con rtorno de valor */
/*function resta(a,b){
    return a*b;
}
let res=resta(8,3);
alert('retorno de valor'+res);

let restar=(a,b)=>{return a*b};
let resp=restar(8,3);
alert('retorno de valor f.flecha'+resp);

const factorial=(a)=>{
    let res=1
    if(a<0)
        return 'no existe';
    for(let i=0;i<=res;i++){
        res*=i;
        return res;
    }
}
console.log(factorial(4)); 24*/s

/* funcion recurrente */
const fac= n =>{
    if(n<0){
        return 'no existe';
    }else
    if(n==0)
        return 1;
    else
        n=n*fac(n-1);
    return n;
}
alert('el factoral es'+fac(5));