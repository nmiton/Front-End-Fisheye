const btn_contact = document.getElementById("contact_button_modal")
const contact_modal = document.getElementById("contact_modal");
const link_close_modal = document.getElementById("link_close_modal");
const modal = document.getElementById("modal");
const main = document.getElementById("main")
const btn_submit = document.getElementById("btn_submit")
//add addEventListener to display modal
btn_contact.addEventListener("click", displayModal )
//add addEventListener to send the form
btn_submit.addEventListener("click", formSubmit )

document.body.addEventListener("keydown", function(event) {
    if (event.code === "Escape" && contact_modal.style.display === "block") {
        contact_modal.style.display = "none";
        main.style.opacity = 1
    }
});
//function to display the modal
function displayModal() {
    //scroll to top
    window.scroll(0, 0)
    //display modal
	contact_modal.style.display = "block";
    main.style.opacity = 0.5
    contact_modal.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'true')
    // document.body.setAttribute('class','no-scroll')
    link_close_modal.focus()
}
//function to close the modal
function closeModal() {
    contact_modal.style.display = "none";
    main.style.opacity = 1
    contact_modal.setAttribute('aria-hidden', 'true')
    main.setAttribute('aria-hidden', 'false')
    document.body.setAttribute('class','')
    contact_modal.focus()
}
//function to submit the form
function formSubmit(){
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    console.log(firstname+" "+lastname)
    console.log("Email: " + email)
    console.log("Message: " + message)
}
