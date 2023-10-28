let a:number = 0
let d:number = 0
var selection1:number = 0
for(let i:number = 1; i <=10;i++){
    do{
        selection1 = 1;
    }while(selection1 !== 1 && selection1 !== 2)

    if(selection1==1){
        a++
    }else{
        d++
    }
}
a > d ? console.log(`Ana Maria Suarez ha ganado la votacion con ${a} votos`) : (a < d) ? console.log(`Diego Acero la votacion con ${d} votos`): console.log(`Empataron la votacion`)
