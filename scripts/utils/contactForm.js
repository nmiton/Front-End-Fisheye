const btn_contact = document.getElementById("contact_button_modal")
const modal = document.getElementById("contact_modal");
const main = document.getElementsByTagName("main")
const btn_submit = document.getElementById("btn_submit")

btn_contact.addEventListener("click", displayModal )
btn_submit.addEventListener("click", formSubmit )

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

function displayModal() {
	modal.style.display = "block";
    main[0].style.opacity = 0.5
    
}

function formSubmit(){
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    console.log(firstname+" "+lastname)
    console.log("Email: " + email)
    console.log("Message: " + message)
}

function closeModal() {
    modal.style.display = "none";
    main[0].style.opacity = 1
}
