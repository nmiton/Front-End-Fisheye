const headerPhotographerFactory = (data) => {
    const { name, portrait, tagline, city, country } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {
        const div_infos = document.createElement('div')
        div_infos.setAttribute("class", "infos-photographer")

        const h1 = document.createElement('h1');
        h1.textContent = name;

        const location = document.createElement('p')
        location.textContent = city+", "+country
        location.setAttribute("class", "location")

        const tag = document.createElement('p')
        tag.textContent = tagline
        tag.setAttribute("class", "tag")

        div_infos.appendChild(h1)
        div_infos.appendChild(location);
        div_infos.appendChild(tag);

        return (div_infos);
    }

    const getUserImageDOM = () => {
        const div_img = document.createElement('div')
        div_img.setAttribute("class", "img-photographer")

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)

        div_img.appendChild(img)

        return (div_img);
    }
    
    return { getUserCardDOM, getUserImageDOM }
}