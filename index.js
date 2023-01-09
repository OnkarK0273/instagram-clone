// import navbar
import { navbar } from "./component/navbar.js"

let navdiv = document.getElementById("box")
navdiv.innerHTML = navbar()



const Show = async()=>{

    try{
        let url = `https://live-json.onrender.com/insta_posts`
        let res = await fetch(url)
        let data = await res.json()
        append(data)
        console.log(data)
        

    }catch(err){
        console.log("error",err)
    }

}

Show()

let arr = JSON.parse(localStorage.getItem("Recyclebin")) || []

const append = (data) =>{
let div = document.getElementById("posts")

data.map(({caption,image_url,id})=>{
    let cross = document.createElement('div')
    cross.id = 'cross'
    let dele = document.createElement("button")
    dele.innerText = "Delete Post"
    dele.style.padding = "5px"
    dele.style.cursor = "pointer"
    dele.style.backgroundColor = "red"
    dele.style.color = "white"
    dele.style.border = "none"
    dele.style.borderRadius = "5px"
    cross.append(dele)

    dele.addEventListener("click",()=>{
       
        let obj = new costuct(caption,id,image_url)
        arr.push(obj)
        localStorage.setItem("Recyclebin",JSON.stringify(arr))
        console.log(arr)
        deletePost(id)
        
    })

    let card = document.createElement("div")
    card.id = "card"
    card.innerHTML = `<div id="title"><h3>${caption}</h3></div>
        <div id="img"><img src=${image_url} alt=""></div>
        <div id="like">
            <div>
                <i class="material-icons">favorite_border</i>
                <i class="material-icons">chat_bubble_outline</i>
                <i class="material-icons">send</i>
            </div>
            <div>
                <i class="material-icons">turned_in</i>
            </div>

        </div>`

        div.append(card,cross)
 

})


}
// constructor
function costuct(c,i,img){
    this.caption = c,
    this.id = i,
    this.image_url = img
}

// delete post

const deletePost = async (id) =>{

    try{
       
        let res = await fetch(`https://live-json.onrender.com/insta_posts/${id}`,{

        method: 'DELETE',
        headers:{
            'Content-Type':'application/json',
        },

        })


    }
    catch(err){

        console.log(`error ${err}`)
    }
}


