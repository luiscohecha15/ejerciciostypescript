var count:number = 0
let count2:number = 0
let q1:number = 0
let q2:number = 0
let q3:number = 0
let q4:number = 0
let q5:number = 0

q1 = 4;
if(q1 == 4){
    count += 10
    count2 ++
}
do{
    q2 = 3;
if(q2 == 3){
    count += 10
    count2 ++
}
}while(q2 !== 1 && q2!==2 && q2!==3)

q3 = 1;
if(q3 == 1){
    count += 10
    count2 ++
}
q4 = 4;
if(q4 == 4){
    count += 10
    count2 ++
}
do{
    q5 = 1;
if(q5 == 1){
    count += 10
    count2 ++
}
}while(q5 !== 1 && q5!==2)


console.log(`Su puntaje es ${count} y el numero de respuestas acertadas fueron ${count2}`)