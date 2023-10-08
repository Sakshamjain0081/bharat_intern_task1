let tablinks = document.getElementsByClassName("tab");
let tabcontents = document.getElementsByClassName("tab-contents");
let menubtn = document.getElementsByClassName("menu");
let closebtn = document.getElementsByClassName("close");
let Sidemenu = document.getElementById("sidemenu");


function opentab(tabname){
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    Sidemenu.classList.add("opennavbar");
}

function closemenu() {
    Sidemenu.classList.remove("opennavbar");
}