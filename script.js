
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('out');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('out');
    slides[currentSlide].classList.add('active');
}

slides[currentSlide].classList.add('active');

setInterval(showNextSlide, 3000);


function changePage(input) {
    let tabs = ["home", "story", "events", "locomotives", "more", "todo"]
    tabs.forEach(tab =>{
        document.getElementById(tab).classList.add("hidden")
        document.getElementById(tab + "Tab").classList.remove("active")
    })
    switch (input) {
        case "home":
            document.getElementById("home").classList.remove("hidden")
            document.getElementById("homeTab").classList.add("active")
            break
        case "story":
            document.getElementById("story").classList.remove("hidden")
            document.getElementById("storyTab").classList.add("active")
            break
        case "events":
            document.getElementById("events").classList.remove("hidden")
            document.getElementById("eventsTab").classList.add("active")
            break
        case "locomotives":
            document.getElementById("locomotives").classList.remove("hidden")
            document.getElementById("locomotivesTab").classList.add("active")
            break
        case "more":
            document.getElementById("more").classList.remove("hidden")
            document.getElementById("moreTab").classList.add("active")
            break
        case "todo":
            document.getElementById("todo").classList.remove("hidden")
            document.getElementById("todoTab").classList.add("active")
    }
}


function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openSmallPopup(title, text, imageUrl) {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupText").textContent = text
    document.getElementById("popupImage").src = imageUrl;
    document.getElementById("smallPopup").style.display = "flex";
}

function closeSmallPopup() {
    document.getElementById("smallPopup").style.display = "none";
}

