function likesAndPriceFactory(data, photographer) {

    function getUserLikesAndPriceDOM(){

        let photographerTotalLikes = 0

        data.forEach(element => {
            photographerTotalLikes += element["likes"]
        });

        const photographerPrice = photographer.price
        const div_likesAndPrice = document.createElement('div')
        div_likesAndPrice.setAttribute("class", "likes-price")

        const div_likes = document.createElement('div')
        div_likes.setAttribute('class', "total-likes")
        
        const like_icon = document.createElement('i')
        like_icon.setAttribute('class',"fa-solid fa-heart")
        like_icon.setAttribute('aria-label',"likes")

        const total_likes = document.createElement('span')
        total_likes.textContent = photographerTotalLikes

        const div_price = document.createElement('span')
        div_price.setAttribute('class', "price-day")
        div_price.textContent = photographerPrice+"€ / jour";
        
        div_likes.appendChild(total_likes)
        div_likes.appendChild(like_icon)

        div_likesAndPrice.appendChild(div_likes)
        div_likesAndPrice.appendChild(div_price)

        return (div_likesAndPrice)
    }

    return { getUserLikesAndPriceDOM }
}