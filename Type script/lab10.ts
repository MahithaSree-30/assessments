// lab 10 task1
// interface User{
//     readonly id:number;
//     name:string;
//     age?:number;
// }
// const user:User={
//     id:1,
//     name:"Mahitha",
//     age:20,
// };
// console.log(user.id)
// console.log(user.name);
// console.log(user.age);

// lab 10 task2
interface Calculator{
    add(a:number,b:number):number;
    multiply(a:number,b:number):number;
}
const calc:Calculator={
    add(a,b){
        return a+b;
    },
    multiply(a,b){
        return a*b;
    }
};
console.log(calc.add(5,3));
console.log(calc.multiply(5,3));