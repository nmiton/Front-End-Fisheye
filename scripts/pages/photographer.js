// datas for photographer
const dataPhotographer = [];
// infos of photographer
let infoPhotographer = [];
// create div for media
const div_medias = document.createElement("div");
// set class for the div
div_medias.setAttribute("class", "medias-photograph");
// function to get the dat of the photographer in params
const getDataPhotographer = async () => {
	const params = (new URL(document.location)).searchParams;
	const id = params.get("id");
	await fetch("./data/photographers.json")
		.then((res) => res.json())
		.then((data) => {
			data.media.forEach((media) => {
				if (media.photographerId == id) {
					dataPhotographer.push(media);
				}
			});
			data.photographers.forEach((photographers) => {
				if (photographers.id == id) {
					infoPhotographer = photographers;
				}
			});
			return dataPhotographer, infoPhotographer;
		})
		.catch((error) => {
			alert(error);
		});
	return ({
		dataPhotographer,
		infoPhotographer,
	});
};
// select filter
const selectSort = document.getElementById("filter");
// add listener on change on select filter
selectSort.addEventListener("change", getFilter);
// function to get filter of select
function getFilter() {
	const selectedOption = selectSort.value;
	sortDataBy(selectedOption, dataPhotographer, infoPhotographer);
}
// function to sort array with filter
const sortArrayByFilter = (array, filter) => {
	switch (filter) {
	// case title order by ASC
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
		// default order by DESC
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
};
// function to remove childs of a div
const removeChilds = (div) => {
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
};
// function to sort data switch filter
const sortDataBy = (sortBy, dataPhotographer, photographer) => {
	removeChilds(div_medias);
	switch (sortBy) {
	case "title":
		sortArrayByFilter(dataPhotographer, "title");
		addMediaPhotographer(dataPhotographer, photographer);
		break;
	case "date":
		sortArrayByFilter(dataPhotographer, "date");
		addMediaPhotographer(dataPhotographer, photographer);
		break;
	case "popularity":
		sortArrayByFilter(dataPhotographer, "likes");
		addMediaPhotographer(dataPhotographer, photographer);
		break;
	default:
		return dataPhotographer;
	}
};
// function to add media to div media
const addMediaPhotographer = (data, photographer) => {
	data.forEach((data, key) => {
		// media model
		// eslint-disable-next-line no-undef
		const mediaModel = mediaPhotographerFactory(data, photographer.name, key);
		// media DOM
		const mediaCardDOM = mediaModel.getMediaCardDOM();
		// set attribute key for media
		mediaCardDOM.setAttribute("data-key", key);
		div_medias.appendChild(mediaCardDOM);
	});
};

const displayData = async (dataPhotographer, infoPhotographer) => {
	// manage header photographer
	const headerPhotographer = document.querySelector(".photograph-header");
	const btn_modal = document.getElementById("contact_button_modal");
	const main = document.getElementById("main");
	// update title modal
	const modal_title = document.getElementById("modal_title");
	modal_title.innerHTML += ` ${infoPhotographer.name}`;
	// update form aria label
	const form = document.getElementById("form-contact");
	form.setAttribute("aria-label", `Contact me ${infoPhotographer.name}`);
	// add div media to main
	main.appendChild(div_medias);
	// model header photographer
	// eslint-disable-next-line no-undef
	const headerPhotographerModel = headerPhotographerFactory(infoPhotographer);
	// dom header photographer
	const userCardDOM = headerPhotographerModel.getUserCardDOM();
	// dom img  photographer
	const userImageDOM = headerPhotographerModel.getUserImageDOM();
	// model like and price photographer
	// eslint-disable-next-line no-undef
	const userLikesAndPriceModel = likesAndPriceFactory(dataPhotographer, infoPhotographer);
	// dom likes and price
	const userLikesAndPriceDOM = userLikesAndPriceModel.getUserLikesAndPriceDOM();
	// media photographer
	addMediaPhotographer(dataPhotographer, infoPhotographer);

	headerPhotographer.insertBefore(userCardDOM, btn_modal);
	headerPhotographer.appendChild(userImageDOM);
	headerPhotographer.appendChild(userLikesAndPriceDOM);
};

const init = async () => {
	const { dataPhotographer, infoPhotographer } = await getDataPhotographer();
	displayData(dataPhotographer, infoPhotographer);
};

init();
