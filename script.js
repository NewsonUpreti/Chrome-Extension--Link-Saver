const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLinks = [];

const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));
console.log(linksFromLocalStorage);

if (linksFromLocalStorage) {
  myLinks = linksFromLocalStorage;
  render(myLinks);
}

inputBtn.addEventListener("click", function () {
  myLinks.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLinks", JSON.stringify(myLinks));

  render(myLinks);

  // to verify that the local storage is working,
  console.log(localStorage.getItem(myLinks));
});


tabBtn.addEventListener("click", function(){
// grabbing the url of the current tab in real browser...
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){


  
  myLinks.push(tabs[0].url)
 localStorage.setItem("myLinks", JSON.stringify(myLinks))
 render(myLinks)
})

 
  myLinks.push(tabs[0].url)
 localStorage.setItem("myLinks", JSON.stringify(myLinks))
 render(myLinks)
})




function render(links) {
  // giving function a parameter so that the function can be reused as many times as required and possible
  let listitems = "";

  for (let i = 0; i < links.length; i++) {
    listitems += `
    <li> 
    <a href = ' ${links[i]}'target = '_blank'>
    ${links[i]}
    </a> 
    </li>`;
  }
  ulEl.innerHTML = listitems;
}


//needs to double click to delete the entries stored in the local storage
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLinks = [];
  render(myLinks);
});
