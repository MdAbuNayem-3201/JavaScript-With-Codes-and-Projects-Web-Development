/*API: Application Programming Interface

The fetch API provides an interface for fetching (sending/receiving) resources

It uses Request and Response objects.

The fetch() method is used to fetch a resourch (data)

let promise = fetch(url, [options])

*/

let para = document.querySelector(".para")
let btn = document.querySelector(".btn");


const URL = 'https://dummyjson.com/todos';

const getFacts = async () => {
    console.log("Getting data.....")
    let response = await fetch(URL);      //response is an object
    console.log(response)
    console.log(response.status)

    let data = await response.json();
    console.log(data)
    console.log(data.todos[0])
    console.log(data.todos[0].todo);
    para.innerText = data.todos[0].todo;
}

//console.log(getFacts())

//Using promise chain
fetch(URL).then((response)=>{      //status: 200 means fullfilled(resolved)
    return response.json()    //response comes as json format
}).then((data)=>{
    console.log(data)
    console.log(data.todos[0]);
    console.log(data)
})

btn.addEventListener("click",getFacts);



/*Understanding terms:

AJAX : Asynchronous JS and XML
AJAJ : Asynchronous JS and JSON

JSON: is JavaScript Object Notation

json() method: returns a second promise (first promise returns by fetch() method) that resollves with the result of parsing the respinse body text as JSON. (Inpit is JSON, output is JS object)
*/