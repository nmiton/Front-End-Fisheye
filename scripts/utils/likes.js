// eslint-disable-next-line no-unused-vars
const incrementLike = (event) => {
  event.preventDefault();
  const clickedElement = event.target;
  // iconParentElement
  const iconParentElement = clickedElement.parentNode;
  // likesParentElement
  const likesParentElement = iconParentElement.parentElement;
  // likes div
  const likes = likesParentElement.getElementsByClassName("likes")[0];
  // last number like
  const lastNumberLikes = parseFloat(likes.innerHTML);
  // new number like
  const newNumberLikes = lastNumberLikes + 1;
  // update likes
  likes.textContent = newNumberLikes;
  // get the element of total likes
  const totalLikes = document.getElementById("total-likes");
  // set the last number like with parse the innerHTML of totalLikes
  const lastNumberTotalLikes = parseFloat(totalLikes.innerHTML);
  // set the new number of likes
  const newNumberTotalLikes = lastNumberTotalLikes + 1;
  // set the content of totalLikes
  totalLikes.textContent = newNumberTotalLikes;
};
