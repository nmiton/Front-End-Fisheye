const lightbox_modal = document.getElementById("lightbox_modal")
const close_lightbox_modal = document.getElementById('close_lightbox_modal')
// const img_modal = document.getElementById("img-modal")
const imgDiv = document.getElementById("imgModal")
const title_img_modal = document.getElementById("title-img-modal")
const link_previous = document.getElementById("link-previous")
const link_next = document.getElementById("link-next")

function previousImage(){
    console.log("previous")
}

function nextImage(){
    console.log("next")
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

function majLightbox(event){
    //scroll to top
    window.scroll(0, 0)
    //remove child of img div of modal
    removeChilds(imgDiv)
    //get img title
    const title = event.target.parentNode.children[1].children[0].innerHTML
    //get img src
    img_src = event.target.src
    //get img alt
    img_alt = event.target.alt
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

