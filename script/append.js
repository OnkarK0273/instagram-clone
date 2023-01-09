const append = (data,cont,addpost) =>{
    

    data.forEach(({caption,image_url,id},i)=>{

        
        let card = document.createElement("div")
        card.id = "card"

        let img = document.createElement("img")
        img.src = image_url
        img.style.width = "100%"

        let name = document.createElement("p")
        name.innerText = caption

        let restore = document.createElement("button")
        restore.innerText = "Restore"
        restore.style.cursor = "pointer"

        restore.addEventListener("click",(e)=>{
            console.log(caption)
            addpost(caption,id,image_url)

            e.target.parentNode.remove()

            data.splice(i,1)
            localStorage.setItem("Recyclebin",JSON.stringify(data))

        })

        card.append(img,name,restore)
        cont.append(card)

    })
}

export {append}