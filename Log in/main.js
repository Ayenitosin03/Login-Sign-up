function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("message-success", "message-error")
    messageElement.classList.add('form-message ${type}');
}
let loginForm = document.querySelector("#login");
let signupForm = document.querySelector("#signup");
document.addEventListener("DOMContentLoaded", () => {
     const loginForm = document.querySelector("#login");
     const signupForm = document.querySelector("#signup");

document.querySelector("#linkCreateAccount").addEventListener("click", e   => {
    e.preventDefault();
    loginForm.classList.add("form-hidden");
    signupForm.classList.remove("form-hidden");
});

document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    signupForm.classList.add("form-hidden");
});

loginForm.addEventListener("submit", e => {
   e.preventDefault();

   //setFormMessage(loginForm, "error", "Invalid username/password combination");

});

});



const displayAlert = ( message) => {
    const container = document.querySelector('.alert-container');
    const h5 = document.createElement('h5');
    h5.className = 'alert';
    h5.textContent = message;
    container.append(h5);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  };
document.getElementById('login').addEventListener('submit',async(event)=>{
    event.preventDefault();

    // const name = document.getElementById('name').value;
	console.log("login");
	signInUser();
	
 
})

document.getElementById('signup').addEventListener('submit',async(event)=>{
    event.preventDefault();
console.log("Sign up");
    signUpUser();
    // const name = document.getElementById('name').value;
	
 
})
async function signInUser(){
 const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

console.log(email);
console.log(password);
    if( !email ||! password){
        console.log("Sorry feilds can not be empty");
        
        return;
    }
    const data ={
        email,
        password
    };
    const url = 'https://kobowork.herokuapp.com/api/v1/auth/login' ;

    
    const res = await makeFetch(data, url);
    console.log(res);
    if(res.error != undefined){
        //displayAlert("Invalid username/password combination")
	setFormMessage(loginForm, "error", "Invalid email/password combination");
    } else{
        location.href = './home.html'
    }
}

async function signUpUser(){
 let name = document.getElementById('name').value;
 let email = document.getElementById('email').value;
 let password = document.getElementById('password').value;

console.log(name);
console.log(email);
console.log(password);
 if( !email ||! password){
        console.log("Sorry feilds can not be empty");
        
        return;
    }
    const data ={
        email,
        password,
name
    };
    const url = 'https://kobowork.herokuapp.com/api/v1/auth/register' ;

    
    const res = await makeFetch(data, url);
    console.log(res);
    if(res.error != undefined){
      //  displayAlert(res.error)
	setFormMessage(signupForm ,"error", "An Error Occurred While Signing up");
    } else{
        location.href = './home.html'
    }

}



const makeFetch = async(data, url)=>{
    try{

        const res = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(data)
        });

        const datas = await res.json();
        console.log(datas)
        return datas;
    }
    catch (err){
        return err;
	console.error(err);
    }

}


