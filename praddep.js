/*let ul = document.getElementById('items');
//ul.remove();
//ul.firstElementChild.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ='Hello';
ul.children[1].innerText = 'Bad';
ul.lastElementChild.innerHTML= '<h2>good</h2>';
*/

/*let btn = document.querySelector('.btn');
btn.addEventListener('click' , (e) =>{
    e.preventDefault();
document.querySelector('#my-form').style.background  = 'grey';
document.querySelector('body').classList.add('bg-dark');
})*/
/*
let myForm = document.querySelector('#my-form');
let nameInput= document.querySelector('#name');
let emailInput = document.querySelector('#eamil');
let msg = document.querySelector('.msg');
let userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');
        msg.innHTML = 'Please enter all fields'; 

        setTimerout(()=> MessageChannel.remove ,3000);
    } else{
           let li  = document.createElement('li');
           li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
           userList.appendChild(li);
           nameInput.value = '';
        emailInput.value ='';
        }
}

function saveTiioLocalStorage(event){
    event.preventDefault();
    let msg = event.target.username.value ;
    let name = event.target.emailId.value ; 
    let phonenumber = event.target.phonenumber.value ; 
    localStorage.setItem('name' , name);
    localStorage.setItem('email' , email);
    localStorage.setItem('phonenumber' , phonenumber);
}

import "../styles.css";

const submitButton = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
  console.log("vscode");
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = keys.length; //6
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  });
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(object);
  }
});
*/
/*
function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);
    // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);

  ul.appendChild(li);
}
*/

let submitButton = document.getElementById("submit");

document.addEventListener("contentloaded", () => {

  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("vscode");
let key = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = key.length; //6
  console.log("keys", key);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  });
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId 
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "pradeep";
  
  a1.addEventListener("click", () => {
  
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });

  li.appendChild(a1);

  const a = document.createElement("input");
  
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);

    li.remove();
  });

}
