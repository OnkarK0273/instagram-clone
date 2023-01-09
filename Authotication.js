

// ctreate user class for signup and login

function user(n,e,p,u,m,d){
    this.name = n
    this.email = e
    this.password = p
    this.username = u
    this.mobile = m
    this.description = d 
}


async function register(){

    event.preventDefault()
   

    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const username = document.querySelector("#username").value
    const mobile = document.querySelector("#mobile").value
    const decription = document.querySelector("#decription").value

    let userData = new user(name,email,password,username,mobile,decription)

    
    try{

    let url = 'https://masai-api-mocker.herokuapp.com/auth/register'
 
    let res = await fetch(url,{
        method :'POST',

        body: JSON.stringify(userData),

        head:{
            'Content-Type':'application/json'
        },
    });

    let data = await res.json()

    console.log("sihn-up",data)
    }
    catch(err){
        console.log(`error ${err}`)
    }
    
}

/*
const login = async () =>{

    event.preventDefault()

    let logindata = {
        username:document.querySelector("#log-username").value,
        password:document.querySelector("#log-password").value
    }
  
    // masai login server url
    let l_url = 'https://masai-api-mocker.herokuapp.com/auth/login'


    let res = await fetch(l_url,{
        // post methodes
        method: 'POST',

        body: JSON.stringify(logindata),

        //heder is additional data about api

        headers: {
            'Content-Type':'application/json'
        },

    });

    let data = await res.json()
    let token = data.token
    getprofile(logindata.username,token)
    console.log("log in",data)

}
*/
