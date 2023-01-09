// import navbar
import { navbar } from "./component/navbar.js"

let navdiv = document.getElementById("box")
navdiv.innerHTML = navbar()

let form1 = document.getElementById("addform")

let form3 = document.getElementById("updateform")

// at begening buttton is disabled
let button = document.getElementById("btn")
button.disabled = true

let image_url;
let image = document.getElementById("image")
image.addEventListener("change",async ()=>{

    // convert img to url 

    let autualData = image.files[0]
    console.log("actual",autualData)
    let form =new FormData()
    
    form.append('image',autualData)
    console.log("form",form)

    try{

        let url = `https://api.imgbb.com/1/upload?key=acb4b08475bc97480ac09c0843265f2e`
        let res = await fetch(url,{
            method: 'POST',
            body :form,
        })

        let data = await res.json()

        image_url = data.data.display_url
        button.disabled = false
        console.log(image_url)
        console.log(data)
    }
    catch(err){
        console.log("error",err)
    }

})

// post button to add data to server------------------------
form1.addEventListener("submit",(e)=>{
   e.preventDefault()

   addpost()

})

// add post to local server 
const addpost = async () =>{
    let caption = document.getElementById("caption").value ;
    let id = document.getElementById("id").value ;

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



// update one perticular data from json server

form3.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    updatePost()
   
 })


 const updatePost = async () =>{

    
    try{
        
        let upcap = document.getElementById("update_cap").value
        let upid =  document.getElementById("update_id").value

        let sendData = {
            caption : upcap
        }

        let res = await fetch (`https://live-json.onrender.com/insta_posts/${upid}`,{

            method : 'PATCH',

            body : JSON.stringify(sendData),

            headers:{
                'Content-Type':'application/json',
            },


        })

        

    }
    catch(err){
        console.log(`error ${err}`)
    }
}


