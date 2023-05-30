const photographerFactory = (data) => {
    const { name, portrait, tagline, price, city, country, id } = data;

    const picture = `assets/photographers/${portrait}`;

    const getUserCardDOM = () => {
        const link = document.createElement('a')
        link.setAttribute("alt", name)
        link.setAttribute('href', '/photographer.html?id='+id)

        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p')
        location.textContent = city+", "+country
        location.setAttribute("class", "location")

        const tag = document.createElement('p')
        tag.textContent = tagline
        tag.setAttribute("class", "tag")

        const money= document.createElement('p')
        money.textContent = price+"€/jour"
        money.setAttribute("class", "money")

        link.appendChild(img)
        link.appendChild(h2)
        figure.appendChild(link);
        figure.appendChild(location);
        figure.appendChild(tag);
        figure.appendChild(money);
        return (figure);
    }

    return { name, picture, getUserCardDOM }
}