const lightbox_modal = document.getElementById("lightbox_modal");
const close_lightbox_modal = document.getElementById("close_lightbox_modal");
const imgDiv = document.getElementById("imgModal");
const title_img_modal = document.getElementById("title-img-modal");
const link_previous = document.getElementById("link-previous");
const link_next = document.getElementById("link-next");
const medias = document.getElementsByClassName("media");
const mainSection = document.getElementById("main");
// function to set the previous key with param key ref to media key
const previousImage = (key) =>{
    let newKey;
    if(key-1<0){
        newKey = medias.length-1;
    }else{
        newKey = key - 1;
    }
    majLightbox(newKey);
};
// function to set the next key with param key ref to media key
const nextImage = (key) => {
    let newKey;
    if(key+1 > medias.length-1){
        newKey = 0;
    }else{
        newKey = key + 1;
    }
    majLightbox(newKey);
};
//function to display the lightbox with like param key ref to media key
// eslint-disable-next-line no-unused-vars
const displayLightbox = (key) => {
    majLightbox(key);
    //diplay modal
	lightbox_modal.style.display = "block";
    lightbox_modal.setAttribute("aria-hidden", "false");
    lightbox_modal.setAttribute("aria-label", "image closeup view");
    mainSection.setAttribute("aria-hidden", "true");
    //maj class body
    document.body.setAttribute("class","no-scroll");
    close_lightbox_modal.setAttribute("alt","Close dialog");
    close_lightbox_modal.focus();
};
// Event listener rfor keydown escape 
document.body.addEventListener("keydown", function(event) {
    const key = imgDiv.getAttribute("data-key");
    if (event.code === "Escape" && lightbox_modal.style.display === "block") {
        lightbox_modal.style.display = "none";
        mainSection.style.opacity = 1;
        document.body.setAttribute("class","");
    }
    if (event.code === "ArrowLeft" && lightbox_modal.style.display === "block") {
        previousImage(parseInt(key));
    }
    if (event.code === "ArrowRight" && lightbox_modal.style.display === "block") {
        nextImage(parseInt(key));
    }
});
//function to update content of lightbox with like param key ref to media key
const majLightbox = (key) =>{
    // set atribute key for imgDiv
    imgDiv.setAttribute("data-key",key);
    //set attribute onclick on previous link
    link_previous.setAttribute("onclick","previousImage("+key+")");
    //set attribute onclick on previous link
    link_next.setAttribute("onclick","nextImage("+key+")");
    //scroll to top
    window.scroll(0, 0);
    //remove child of img div of modal
    // eslint-disable-next-line no-undef
    removeChilds(imgDiv);
    //get media with key
    const media = document.querySelector("[data-key='"+key+"']");
    //get img title
    const title = media.children[1].children[0].innerHTML;
    //get img src
    const imgSrc = media.children[0].children[0].src;
    //get img alt
    const imgAlt = media.children[0].children[0].alt;
    //get extension
    const srcSplit = imgSrc.split(".");
    const extension = srcSplit[srcSplit.length-1];
    //img or video 
    let img_modal = null;
    //condition for img_modal element
    if(extension==="mp4"){
        img_modal = document.createElement("video");
        //attribute autoplay for video
        img_modal.setAttribute("autoplay","");
    }else{
        img_modal = document.createElement("img");
    }
    //add alt
    img_modal.setAttribute("alt",imgAlt);
    // add src
    img_modal.setAttribute("src",imgSrc);
    //add class
    img_modal.setAttribute("class","img-modal");
    //set title for modal
    title_img_modal.textContent = title;
    //add img to div img modal
    imgDiv.appendChild(img_modal);
};
//close lightbox
// eslint-disable-next-line no-unused-vars
const closeLightbox = () =>{
    lightbox_modal.style.display = "none";
    lightbox_modal.setAttribute("aria-hidden", "true");
    mainSection.setAttribute("aria-hidden", "false");
    document.body.setAttribute("class","");
};

