let dataPhotographer = []
let infoPhotographer = []
//Mettre le code JavaScript lié à la page photographer.html
async function getDataPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
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

const selectSort = document.getElementById("filter")
selectSort.addEventListener("change", getFilter)

function getFilter(){
    const selectedOption = selectSort.value
    sortDataBy(selectedOption,dataPhotographer)
}
//function to sort array with filter
function sortArrayByFilter(array,filter){
    switch (filter) {
        //case title order by ASC
        case "title":
            array.sort((a, b) => {
                if (a[filter] < b[filter]) {
                    return -1;
                }
                if (a[filter] > b[filter]) {
                    return 1;
                }
                return 0;
            });
            break;
        //default order by DESC
        default:
            array.sort((a, b) => {
                if (a[filter] < b[filter]) {
                    return 1;
                }
                if (a[filter] > b[filter]) {
                    return -1;
                }
                return 0;
            });
            break;
    }
}

function sortDataBy(sortBy,dataPhotographer){
    switch (sortBy) {
        case "title":   
            sortArrayByFilter(dataPhotographer,"title")
            // dataPhotographer.forEach(element => {
            //     console.log(element["title"])
            // });
            break;
        case "date":
            sortArrayByFilter(dataPhotographer,"date")
            // dataPhotographer.forEach(element => {
            //     console.log(element["date"])
            // });
            break;
        case "popularity":
            sortArrayByFilter(dataPhotographer,"likes")
            // dataPhotographer.forEach(element => {
            //     console.log(element["likes"])
            // });
            break;
        default:
            return dataPhotographer
    }
}

//function to add media to div media
function addMediaPhotographer(data,photographer,div){
    data.forEach((data) => {
        //media model
        const mediaModel = mediaFactory(data,photographer.name)

        const mediaCardDOM = mediaModel.getMediaCardDOM();
        div.appendChild(mediaCardDOM)
    });
}

async function displayData(dataPhotographer, infoPhotographer) {
    //manage header photographer
    const headerPhotographer = document.querySelector(".photograph-header");
    const btn_modal = document.getElementById('contact_button_modal')
    const main = document.getElementById('main')
    //update title modal
    const modal_title = document.getElementById('modal_title')
    modal_title.innerHTML += " "+infoPhotographer.name
    //update form aria label
    const form = document.getElementById("form-contact")
    form.setAttribute('aria-label','Contact me '+infoPhotographer.name)
    //create div for media
    const div_medias = document.createElement('div')
    div_medias.setAttribute("class", "medias-photograph")
    //add div media to main
    main.appendChild(div_medias)
    //model header photographer
    const headerPhotographerModel = headerPhotographerFactory(infoPhotographer);
    //dom header photographer
    const userCardDOM = headerPhotographerModel.getUserCardDOM();
    //dom img  photographer
    const userImageDOM = headerPhotographerModel.getUserImageDOM();
    //model like and price photographer
    const userLikesAndPriceModel = likesAndPriceFactory(dataPhotographer,infoPhotographer);
    //dom likes and price 
    const userLikesAndPriceDOM = userLikesAndPriceModel.getUserLikesAndPriceDOM()
    //media photographer
    addMediaPhotographer(dataPhotographer,infoPhotographer,div_medias)

    const filter = document.getElementById("filter").value
    console.log(filter)

    headerPhotographer.insertBefore(userCardDOM,btn_modal)
    headerPhotographer.appendChild(userImageDOM)
    headerPhotographer.appendChild(userLikesAndPriceDOM)

};

async function init() {
    const { dataPhotographer, infoPhotographer } = await getDataPhotographer();
    displayData(dataPhotographer, infoPhotographer);
};

init();