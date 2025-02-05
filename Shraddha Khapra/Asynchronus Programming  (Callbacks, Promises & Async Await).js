//async await >> promise chain >> callback hell

//Synchronous means that the code runs in a particular sequencce of instructions given in the program. Each instruction waits for the previoes instruction to complete its excecution.

console.log("Synchronous Programmng example:");
console.log("One");
console.log("Two");
console.log("Three \n\n\n");

//Asynchronous: Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructiions, which causes a delay in the UI. Asynchronous code excecution allows to  excecute next instructionns immediately and dosen't block the flow.

/*

console.log("Asynchronous Function example:")
function Hello(){
    console.log("Hello...")
}
setTimeout(Hello, 3000)   //  2000 ms = 2sec

 
setTimeout(() => {
    console.log("Hello everyone....")
}, 2000)


*/

//callback: A callback is function passed as an argument to another function.

console.log("\n\n\nCallback:");
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(4, 5, sum);

/*
const hello = () => {
    console.log("Hello....")
}

setTimeout(hello, 2000)
*/

//Callback Hell: Nested callbacks stacks below one another forming a pyramid structure. (Pyramid of Doom)

//This style of programming becomes difficult to understand and manage

/*

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data:", dataId);

        if(getNextData){
            getNextData();
        }
    }, 2000)
}
getData(1, () => {
    console.log("Getting Data 2....");
    getData(2, () => {
        console.log("Getting Data 3....");
        getData(3, () =>{
            console.log("Getting Data 4....");
            getData(4,()=>{
                console.log("Getting Data 5....");
                getData(5)
            })
        })
    })
})


*/

//Promises: Promise is for "eventual" completion of task. It is an object in JS.

//It is a solution to callback hell.

//let promise = new Promise((resolve, reject) =>{....})   function with 2 handlers, both handlers are also functions

// resolve and reject are callbacks provided by js

/* Promise states:
    1. pending: The result is undefined 
    2. fullfiled (resolved): the result is value(fullfuilled)     resolve(result/result message)
    3. rejected : the result is an error object         reject(error/ error message)     
*/

/*
console.log("\n\nPromise:\n\n");

let promise1 = new Promise((resolve, reject) => {
  console.log("I am a promise1.");
  // console.log(promise1)    weite promise1 on browser console to see the states and results
});
console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
  console.log("\n\nI am a promise2.");
  // console.log(promise1)    weite promise1 on browser console to see the states and results
  resolve("success");
});

console.log(promise2);

let promise3 = new Promise((resolve, reject) => {
  console.log("I am promise 3.");
  // reject("some error occured..")
});

console.log(promise3);

//way to fetch data from API
console.log("\n\nGeneral Process to Get/Fetch Data:");
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve("succesfull");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

let result = getData(123); //result(object)...stores data which returned as class
console.log(result);

//.then() and .catch() function in promise

const getPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("\n\nI am promise");
      resolve("Success");
      // reject("Rejected")
    },3000);
  });
};

let promise = getPromise(188);

//if promise is resolved...then we can use .then() function
promise.then((result) => {
  console.log("Promise fullfilled....", result);
});

//if promise is rejected...then we can use .catch() function
promise.catch((error) => {
  console.log("Promise rejected...", error);
});
*/

console.log("\n\nPromise Chain:");

/*
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Success");
    }, 4000);
  });
}

let p1 = asyncFunc1();

console.log("Fetching data1....");

p1.then((res) => {
  console.log("Fetching data2....");
  let p2 = asyncFunc2();
  p2.then((res) => {});
});
*/

/*For above section of code----
If we call like this....both are fetching parallelly
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res)
})

let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res)
})
*/

/*
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("Success");
    }, 3000);
  });
}
*/

/*
console.log("Fetching Data1:")
getData(1).then((res)=>{
  console.log(res);
  console.log("Fetching Data2:")
  getData(2).then((res)=>{
    console.log(res)
  })
})
*/

//Actual statement of promise chaining...the above is also same
/*
console.log("Getting data1:");
getData(1)
  .then((res) => {
    console.log("Getting data2:");
    return getData(2); //returns success from resolve("success")
  })
  .then((res) => {
    console.log("Getting data3:");

    return getData(3); //returns success from resolve("success")
  })
  .then((res) => {
    //res of getData(3) takes as argument which is success
    console.log(res);
  });


*/

console.log("\n\n\nAsync-Await:");
//Async-Await
/*async function always returns  a promise

  async function myFunc(){
    .........
  }

  await pauses the execution of its surrounding async function until the promise is settled

  --await means to wait
  */

/*
async function hello() {
  //this function is returns a promise. Although we do not use return keyword
  console.log("hello");
}

hello(); //call the function on browser console to see the promise result and state

*/

/*
function api(data){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      console.log("Wheather data",data);
      resolve(200)
    },3000)
  })
}

async function getWheatherData(){
  await api(1);
  await api(2);
}

getWheatherData()
*/

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", data);
      resolve("success");
    }, 2000);
  });
}

//async-await
/*
async function getAllData(){
  console.log("Getting data1....");
  await getData(1);
  console.log("Getting data2....");
  await getData(2);
  console.log("Getting data3....");
  await getData(3);
  console.log("Getting data4....");
  await getData(4);
  console.log("Getting data5....");
  await getData(5);
}
getAllData();   //call getAllData function
*/

//This call is unnecessary call of function
//we can use the below IIFE function to avoid this unnecessary function call
//But we can not use this function multiple time...it only execute one time

/*IIFE: Immediateky Invoked Function Expression
IIFE is function that called immediately as soon as it is defined

*/

(async function () {
  console.log("Getting data1....");
  let res = await getData(1);
  console.log(res)
  console.log("Getting data2....");
  await getData(2);
  console.log("Getting data3....");
  await getData(3);
  console.log("Getting data4....");
  await getData(4);
  console.log("Getting data5....");
  await getData(5);
})();
