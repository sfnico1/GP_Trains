
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
slides[currentSlide].classList.add('active');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('out');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('out');
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

function updateAreaCoords() {
    let headerHeight = document.querySelector('header').offsetHeight;
    headerHeight += 20
    document.querySelector('main').style.marginTop = `${headerHeight}px`;

    const image = document.getElementById('layout-image');
    const imgWidth = image.clientWidth;
    const imgHeight = image.clientHeight;

    let areas = ['upArea', 'lowArea', 'kidsArea', 'switchArea', 'homeArea', 'wallArea']
    let coords = [[.22, 0, 1, .30], [.22, .35, .52, .80], [0, .50, .25, .75], [.60, .31, .85, .57], [.65, .60, 1, .85], [.02, .90, .52, 1]]

    areas.forEach((id, index) => {
        let area = document.getElementById(id);

        let x1 = imgWidth * coords[index][0];
        let y1 = imgHeight * coords[index][1];
        let x2 = imgWidth * coords[index][2];
        let y2 = imgHeight * coords[index][3];
        area.setAttribute('coords', `${x1},${y1},${x2},${y2}`);
    })
}

window.onload = updateAreaCoords;
window.onresize = updateAreaCoords;


function changePage(input) {
    let tabs = ["home", "story", "events", "locomotives", "more", "todo"]
    tabs.forEach(tab => {
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


function openPopup(input) {
    event.stopPropagation();
    switch (input) {
        case "up":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on the Upper Lot!"
            break
        case "low":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on the Lower Lot!"
            break
        case "kids":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on the Kid's Area!"
            break
        case "switch":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on the Switchyard!"
            break
        case "home":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on our Childhood Home Area"
            break
        case "wall":
            document.getElementById("layoutPopup-title").innerHTML = "You clicked on the Train Wall!"
            break
        default:
            document.getElementById("layoutPopup-title").innerHTML = "You clicked ... somewhere"
            break
    }
    document.getElementById("layoutPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("layoutPopup").style.display = "none";
}

function openSmallPopup(title, text, imageUrl) {
    document.getElementById("enginePopup-title").textContent = title;
    document.getElementById("enginePopup-text").textContent = text
    document.getElementById("enginePopup-image").src = imageUrl;
    document.getElementById("enginePopup").style.display = "flex";
}

function closeSmallPopup() {
    document.getElementById("enginePopup").style.display = "none";
}

