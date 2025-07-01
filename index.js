// console.log("hello World");
// function sayHello(){
//     console.log("hello from sayHello function ");
// }
// sayHello();
// console.log("this is a simple JavaScript program");



// console.log("one");
// console.log("two")
// setTimeout(()=>{
// console.log("Hello World");
// },5000);
// console.log("three");
// console.log("four");


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,ds){
//     ds(a,b);

// }
// calculator(5,10);




// function getData(dataid){
// setTimeout(()=>{
// console.log("fetching  data for id:", dataid);
// },5000);
// }
// getData(1);
// getData(2);
// getData(3);
// getData(4);


// function getData(dataid,getnextdata){
//     setTimeout(() => {
//     console.log("fetching data for id:",dataid);
//     if (getnextdata){
//         getnextdata();
//     } 
//     }, 2000);
// }

// getData(1,()=>{
//     console.log("getting data 2.......")
// })
// getData(2,()=>{
//     console.log("getting data 3.......")
// })
// getData(3,()=>{
//     console.log("getting data 4.......")
// })


// callbackhell
//to overcome

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = true;
//         if(success){
//             resolve("data fetching successful ");

//         }else{
//             reject("error fetching data")
//         }
//     })
// });

// myPromise
//     .then((data)=>{
//         console.log("promiseresolve with data",data);

//     })
//     .catch((error)=> {
//         console.log("promise rejected with  error ",error);
        
//     })


// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise ");
//     if(1<0){
//         resolve(123);
//     }
//     reject("something went wrong ");
// })

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetching data for id:",dataid);
            resolve("success");

        },2000);
    })
}

let result=getData(123);
result;
getData(101)
    .then(result =>{
        console.log("first fetch :",result);
        return getData (102);
    })

    .then(result =>{
        console.log("second fetch :",result);
        return getData (103);
    })