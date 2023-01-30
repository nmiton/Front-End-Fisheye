const lightbox_modal = document.getElementById("lightbox_modal")
const close_lightbox_modal = document.getElementById('close_lightbox_modal')
const imgDiv = document.getElementById("imgModal")
const title_img_modal = document.getElementById("title-img-modal")
const link_previous = document.getElementById("link-previous")
const link_next = document.getElementById("link-next")
const medias = document.getElementsByClassName("media")

function previousImage(key){
    newKey = key
    if(key-1<0){
        newKey = medias.length-1
    }else{
        newKey = key - 1
    }
    majLightbox(newKey)
}

function nextImage(key){
    newKey = key
    if(key+1>medias.length-1){
        newKey = 0
    }else{
        newKey = key + 1
    }
    majLightbox(newKey)
}

function displayLightbox(event) {
    majLightbox(event)
    //diplay modal
	lightbox_modal.style.display = "block";
    lightbox_modal.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'true')
    //maj class body
    document.body.setAttribute('class','no-scroll')
    close_lightbox_modal.focus()
}

function majLightbox(key){
    link_previous.setAttribute("onclick","previousImage("+key+')')
    link_next.setAttribute("onclick","nextImage("+key+')')
    //scroll to top
    window.scroll(0, 0)
    //remove child of img div of modal
    removeChilds(imgDiv)

    //get media with key
    const media = document.querySelector("[key='"+key+"']")
    console.log(key)
    console.log(media)
    //get img title
    const title = media.children[1].children[0].innerHTML
    //get img src
    img_src = media.children[0].src
    //get img alt
    img_alt = media.children[0].alt
    //get extension
    const extension = img_src.split('.');
    //img or video 
    let img_modal = null
    //condition for img_modal element
    if(extension[1]==="mp4"){
        img_modal = document.createElement("video")
        //attribute autoplay for video
        img_modal.setAttribute("autoplay","")
    }else{
        img_modal = document.createElement("img")
    }
    // add src
    img_modal.setAttribute("src",img_src)
    //add alt
    img_modal.setAttribute("alt",img_alt)
    //add class
    img_modal.setAttribute("class",'img-modal')
    //set title for modal
    title_img_modal.textContent = title
    //add img to div img modal
    imgDiv.appendChild(img_modal)
}

function closeLightbox() {
    lightbox_modal.style.display = "none";
    lightbox_modal.setAttribute('aria-hidden', 'true')
    main.setAttribute('aria-hidden', 'false')
    document.body.setAttribute('class','')
}

