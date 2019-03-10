"use strict";

window.addEventListener("DOMContentLoaded", init);

function init(){

let list = document.querySelector("ul");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
     event.target.classList.toggle('checked');
  }
 }, false);

    post(myTask);
}

function post(myTask){
    const postTask = JSON.stringify(myTask);
    fetch("https://bands-d0fc.restdb.io/rest/to-do-list", {
method: "post",
body: postTask,
headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5c7cec4ecac6621685acbad5",
    "cache-control": "no-cache"
}
    })
        .then(res => res.json())
        .then(data => {
         form.elements.save_task.disabled = false;
         form.elements.task.value = null;

         showTasks(data)});
}

// this function gets the jason-file from the DB and then displayes the data in the html DOM
function getJson(){
    fetch("https://bands-d0fc.restdb.io/rest/to-do-list", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "	5c7cec4ecac6621685acbad5",
          "cache-control": "no-cache"
        }
      })
        .then( res => res.json())
        .then( data => {
            getJson.forEach(showTasks);
        })} 

function showTasks(tasks){

    const template = document.querySelector("div").content;
    const clone = template.cloneNode(true);

    clone.querySelector("li").textcontent = tasks.task;

    document.querySelector("main").appendChild(clone);
// her skal man også kunne fjerne en taske når man har udført den, så der skal addes en 
// clone.querySelector("en eller anden knap").addEventlistner(click, ()=>{
// functionens_navn(tasks. et eller andet muligvis id)})
// 
}