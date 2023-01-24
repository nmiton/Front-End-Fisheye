//Mettre le code JavaScript lié à la page photographer.html
async function getDataPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let dataPhotographer = []
    let infoPhotographer = []
    await fetch('./data/photographers.json')
    .then(res => res.json())
    .then(data => {
        data.media.forEach(media => {
            if(media.photographerId == id){
                dataPhotographer.push(media)
            }
        });
        data.photographers.forEach(photographers => {
            if(photographers.id == id){
                infoPhotographer = photographers
            }
        });
        return dataPhotographer,infoPhotographer
    })
    .catch(error =>{
        alert(error)
    })
    return({
        dataPhotographer : dataPhotographer,
        infoPhotographer : infoPhotographer
    })
}

async function displayData(dataPhotographer, infoPhotographer) {
    //manage header photographer
    const headerPhotographer = document.querySelector(".photograph-header");
    const btn_modal = document.getElementById('contact_button_modal')
    const main = document.getElementById('main')

    const div_medias = document.createElement('div')
    div_medias.setAttribute("class", "medias-photograph")

    main.appendChild(div_medias)

    const headerPhotographerModel = headerPhotographerFactory(infoPhotographer);
    const userCardDOM = headerPhotographerModel.getUserCardDOM();
    const userImageDOM = headerPhotographerModel.getUserImageDOM();

    dataPhotographer.forEach((data) => {
        const mediaModel = mediaFactory(data,infoPhotographer.name)
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        div_medias.appendChild(mediaCardDOM)
    });
    
    headerPhotographer.insertBefore(userCardDOM,btn_modal)
    headerPhotographer.appendChild(userImageDOM)


};

async function init() {
    const { dataPhotographer, infoPhotographer } = await getDataPhotographer();
    displayData(dataPhotographer, infoPhotographer);
};

init();