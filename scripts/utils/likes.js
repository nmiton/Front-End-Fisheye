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
    //get the element of total likes
    const totalLikes = document.getElementById("total-likes")
    //set the last number like with parse the innerHTML of totalLikes
    const lastNumberTotalLikes = parseFloat(totalLikes.innerHTML)
    //set the new number of likes
    const newNumberTotalLikes = lastNumberTotalLikes + 1
    //set the content of totalLikes
    totalLikes.textContent = newNumberTotalLikes
}
