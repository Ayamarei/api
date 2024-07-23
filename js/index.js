
//  !===============>Features in ES6 <=====================


// <!--  **The let keyword======>The let keyword allows you to declare a variable with block scope.

// *The const keyword======>The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

// * Arrow Functions======>TArrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.


// *For/of==========>The JavaScript for/of statement loops through the values of an iterable objects.
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

// *Classes=======>JavaScript Classes are templates for JavaScript Objects.
// Use the keyword class to create a class.

// *Promises=====>A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
// "Producing Code" can take some time and "Consuming Code" must wait for the result.

// *JavaScript Modules===>Modules are imported in two different ways: 1)Import from named exports 2)Import from default exports -->





// three ways to display data from api in js


// 1. API Call in JavaScript Using XMLHttpRequest
// XMLHttpRequest is an object used to make API calls in JavaScript. Before the release of ES6 which came with Fetch and libraries like Axios in 2015, it is the only way to call API.

// 2. API Call in JavaScript Using the fetch() method
// fetch is a method to call an API in JavaScript. It is used to fetch resources from a server. All modern browsers support the fetch method. It is much easy and simple to use as compared to XMLHttpRequest.


// 3. API call in JavaScript using Axios
// Axios is an open-source library for making HTTP requests to servers. It is a promise-based approach. It supports all modern browsers and is used in real-time applications. It is easy to install using the npm package manager.
// <================================================================>
    
    var links = document.querySelectorAll('.navbar .nav-link')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
       
        var x = e.target.innerHTML
        getApi(x)
    })
    
}

var data = [];

async function getApi(meal) {
//     var myHttp = new XMLHttpRequest();
// myHttp.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
// myHttp.send();
// myHttp.addEventListener('readystatechange', function () {
//     if (myHttp.readyState == 4) {
    //         data = JSON.parse(myHttp.response).recipes

    var myHttp = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    var respons = await myHttp.json()
    data=respons.recipes
        displayData()
    }

getApi('pizza')

function displayData() {
    var colm = ``;

    for (var i = 0; i < data.length; i++) {
        colm+= `  <div class="col-md-4 " >
        <div class="card ">
         <div class="card-body ">
          <img src="${data[i].image_url}" alt="" class="card-img-top ">
           <h4>${data[i].publisher}</h4>
           <a href="${data[i].publisher_url}" class="btn btn-danger">Source</a>
         </div>
       </div>
     </div>`
        
    }
    

    document.getElementById('colm').innerHTML = colm;
}
