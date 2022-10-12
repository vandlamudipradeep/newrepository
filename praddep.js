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

let myForm = document.querySelector('#my-form');
let nameInput= document.querySelector('#name');
let emailInput = document.querySelector('#eamil');
let msg = document.querySelector('.msg');
let userList  =documnet.querySelector('#users');

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