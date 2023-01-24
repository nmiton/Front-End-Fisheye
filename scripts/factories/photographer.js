function photographerFactory(data) {
    const { name, portrait, tagline, price, city, country, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a')
        link.setAttribute("alt", name)
        link.setAttribute('href', '/photographer?id='+id)

        const article = document.createElement('article');

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
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(money);
        return (article);
    }

    return { name, picture, getUserCardDOM }
}