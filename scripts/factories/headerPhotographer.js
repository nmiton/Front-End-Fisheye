// eslint-disable-next-line no-unused-vars
const headerPhotographerFactory = (data) => {
	const {
		name, portrait, tagline, city, country,
	} = data;

	const picture = `assets/photographers/${portrait}`;

	const getUserCardDOM = () => {
		const divInfos = document.createElement("div");
		divInfos.setAttribute("class", "infos-photographer");
		const h1 = document.createElement("h1");
		h1.textContent = name;
		const location = document.createElement("p");
		location.textContent = `${city}, ${country}`;
		location.setAttribute("class", "location");
		const tag = document.createElement("p");
		tag.textContent = tagline;
		tag.setAttribute("class", "tag");
		divInfos.appendChild(h1);
		divInfos.appendChild(location);
		divInfos.appendChild(tag);
		return (divInfos);
	};

	const getUserImageDOM = () => {
		const divImg = document.createElement("div");
		divImg.setAttribute("class", "img-photographer");

		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);

		divImg.appendChild(img);

		return (divImg);
	};

	return { getUserCardDOM, getUserImageDOM };
};
