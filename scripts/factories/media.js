function mediaFactory(data, photographer) {
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
            img.setAttribute("alt", title)
        }

        const media = document.createElement('div')
        media.setAttribute('class',"media")

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

        const like_icon = document.createElement('i')
        like_icon.setAttribute('class',"fa-solid fa-heart")
        like_icon.setAttribute('aria-label',"likes")

        likes_div.appendChild(likes_media)
        likes_div.appendChild(like_icon)

        infos_media.appendChild(title_media)
        infos_media.appendChild(likes_div)

        media.appendChild(img)
        media.appendChild(infos_media)

        return(media)
    }

    return { getMediaCardDOM }
}