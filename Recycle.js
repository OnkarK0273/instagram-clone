// import navbar
import { navbar } from "./component/navbar.js"

let navdiv = document.getElementById("box")
navdiv.innerHTML = navbar()

// import append

import {append} from './script/append.js'

let data = JSON.parse(localStorage.getItem("Recyclebin"))

let div = document.querySelector("#posts")

const addpost = async (caption,id,image_url) =>{
    
    let send_data = {
        caption,
        id,
        image_url,

    };
    try{
        let res = await fetch('https://live-json.onrender.com/insta_posts',{ // how to create local server for that go throw git documentation json server
            method: 'POST',
            body: JSON.stringify(send_data),
            headers : {
                'Content-Type' :'application/json'
            }
        })
    
        let data = await res.json()
        console.log(send_data)

    }catch(err){
        console.log("error",err)
    }
   
}

append(data,div,addpost)
