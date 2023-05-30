function mediaPhotographerFactory(data, photographer,key) {
    const { date, id, image, likes, price, title, video } = data;

    function getMediaCardDOM() {

        let bool_img = true

        if(video != undefined){
            bool_img = false
        }

        let img = null
    
        if(bool_img){
            const picture = `assets/images/${photographer}/${image}`;
            img = document.createElement('img');
            img.setAttribute("src", picture)
            img.setAttribute("alt", title)
            
        }else{
            const videoLink = `assets/images/${photographer}/${video}`;
            img = document.createElement('video');
            img.setAttribute("src", videoLink)
            img.setAttribute("aria-label", title)
        }

        const a_img = document.createElement('a')
        a_img.setAttribute("href", '#')
        a_img.setAttribute("onclick", "displayLightbox("+key+")")
        a_img.setAttribute('title',title)

        const media = document.createElement('figure')
        media.setAttribute('class',"media")
        media.setAttribute('aria-label',title)

        img.setAttribute("aria-label", title + ", closeup view")
        img.setAttribute('class',"img")

        const infos_media = document.createElement('div')
        infos_media.setAttribute('class',"infos-media")

        const title_media = document.createElement("p")
        title_media.setAttribute('class',"title-media")
        title_media.textContent = title;

        const likes_div = document.createElement("div")
        likes_div.setAttribute('class',"likes-media")

        const likes_media = document.createElement("p")
        likes_media.setAttribute('class',"likes")
        likes_media.textContent = likes;

        const button_like = document.createElement("button")
        button_like.setAttribute('class',"btn-like")
        button_like.setAttribute("onclick", "incrementLike(event)")

        const like_icon = document.createElement('em')
        like_icon.setAttribute('class',"fa-solid fa-heart")
        like_icon.setAttribute('aria-label',"Like this photo")

        button_like.appendChild(like_icon)

        likes_div.appendChild(likes_media)
        likes_div.appendChild(button_like)

        infos_media.appendChild(title_media)
        infos_media.appendChild(likes_div)
        a_img.appendChild(img)
        media.appendChild(a_img)
        media.appendChild(infos_media)

        return(media)
    }

    return { getMediaCardDOM }
}