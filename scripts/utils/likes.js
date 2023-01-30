function incrementLike(event){
    const clickedElement = event.target;
    //parentNode
    const parentElement = clickedElement.parentNode
    //likes div
    const likes = parentElement.getElementsByClassName("likes")[0]
    //last number like
    const lastNumberLikes = parseFloat(likes.innerHTML)
    //new number like
    const newNumberLikes = lastNumberLikes + 1
    //update likes
    likes.textContent = newNumberLikes

    const totalLikes = document.getElementById("total-likes")
    const lastNumberTotalLikes = parseFloat(totalLikes.innerHTML)
    const newNumberTotalLikes = lastNumberTotalLikes + 1
    totalLikes.textContent = newNumberTotalLikes
}
