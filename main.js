const webHome = document.querySelector(".webHome");
const home = document.querySelector("#home");
const webContact = document.querySelector(".webContact");
const contact = document.querySelector("#contact");
const webInformation = document.querySelector(".webInformation");
const information = document.querySelector("#information");
const webGuide = document.querySelector(".webGuide");
const guide = document.querySelector("#guide");
const web = document.querySelector("#web");

webHome.addEventListener('click', () =>{
    console.log("clicked");
    home.style.display = "block";
    contact.style.display = "none";
    information.style.display = "none";
    guide.style.display = "none";
    // web.style.display = "none";
});

webContact.addEventListener('click', () =>{
    console.log("clicked");
    // web.style.display = "none";
    home.style.display = "none";
    contact.style.display = "block";
    information.style.display = "none";
    guide.style.display = "none";
});

webInformation.addEventListener('click', () =>{
    console.log("clicked");
    // web.style.display = "none";
    information.style.display = "block";
    guide.style.display = "none";
    home.style.display = "none";
    contact.style.display = "none";
});

webGuide.addEventListener('click', () =>{
    console.log("clicked");
    // web.style.display = "none";
    guide.style.display = "block";
    home.style.display = "none";
    contact.style.display = "none";
    information.style.display = "none";
})