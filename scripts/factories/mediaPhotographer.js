/* eslint-disable no-unused-vars */
const mediaPhotographerFactory = (data, photographer, key) => {
	const {
		image, likes, title, video,
	} = data;

	const getMediaCardDOM = () => {
		let boolImg = true;

		if (video !== undefined) {
			boolImg = false;
		}

		let img = null;

		if (boolImg) {
			const picture = `assets/images/${photographer}/${image}`;
			img = document.createElement("img");
			img.setAttribute("src", picture);
			img.setAttribute("alt", title);
		} else {
			const videoLink = `assets/images/${photographer}/${video}`;
			img = document.createElement("video");
			img.setAttribute("src", videoLink);
			img.setAttribute("aria-label", title);
		}

		const linkImg = document.createElement("a");
		linkImg.setAttribute("href", "#");
		linkImg.setAttribute("onclick", `displayLightbox(${key})`);
		linkImg.setAttribute("title", title);

		const media = document.createElement("figure");
		media.setAttribute("class", "media");
		media.setAttribute("aria-label", title);

		img.setAttribute("aria-label", `${title}, closeup view`);
		img.setAttribute("class", "img");

		const infosMedia = document.createElement("div");
		infosMedia.setAttribute("class", "infos-media");

		const titleMedia = document.createElement("p");
		titleMedia.setAttribute("class", "title-media");
		titleMedia.textContent = title;

		const likesDiv = document.createElement("div");
		likesDiv.setAttribute("class", "likes-media");

		const likesMedia = document.createElement("p");
		likesMedia.setAttribute("class", "likes");
		likesMedia.textContent = likes;

		const buttonLike = document.createElement("button");
		buttonLike.setAttribute("class", "btn-like");
		buttonLike.setAttribute("onclick", "incrementLike(event)");

		const likeIcon = document.createElement("em");
		likeIcon.setAttribute("class", "fa-solid fa-heart");
		likeIcon.setAttribute("aria-label", "Like this photo");

		buttonLike.appendChild(likeIcon);

		likesDiv.appendChild(likesMedia);
		likesDiv.appendChild(buttonLike);

		infosMedia.appendChild(titleMedia);
		infosMedia.appendChild(likesDiv);
		linkImg.appendChild(img);
		media.appendChild(linkImg);
		media.appendChild(infosMedia);

		return (media);
	};

	return { getMediaCardDOM };
};
