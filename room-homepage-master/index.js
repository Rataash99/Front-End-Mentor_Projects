let arr = [
    {
        heading : "Discover innovative ways to decorate",
        content : " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imageDesk : "./Images",
        imageDesk : "./Images/desktop-image-hero-1.jpg",
        imageMob : "./Images/mobile-image-hero-1.jpg"
    },
    {
        heading : "We are available all across the globe",
        content : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imageDesk : "./Images/desktop-image-hero-2.jpg",
        imageMob : "./Images/mobile-image-hero-2.jpg"
    },
    {
        heading : "Manufactured with the best materials",
        content : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imageDesk : "./Images/desktop-image-hero-3.jpg",
        imageMob : "./Images/mobile-image-hero-3.jpg"
    }
]
let width = window.innerWidth;

let angle1 = document.getElementById('angle1');
let angle2 = document.getElementById("angle2");
let heading = document.getElementById("top-heading");
let para = document.getElementById('top-para');
let image = document.getElementById("top-hero-desk");
let hamburg = document.getElementsByClassName("header-img")[0];
let close = document.getElementsByClassName("toggle-nav")[0];
let container = document.getElementsByClassName('container')[0];

let idx1 = 0;
let idx2 = 2;

let handleHam = () => {
    hamburg.classList.toggle('active');
    close.classList.toggle('active');
    container.style.opacity = 0.5;
}
let handleClose = () => {
    close.classList.toggle('active');
    hamburg.classList.toggle('active');
    container.style.opacity = 1;
}
let forward = () => {
    if(idx2 == 3){
        idx2 = 0;
    }
    let data = arr.filter((item, i) => i == idx2);
    heading.innerText = data[0].heading;
    para.innerText = data[0].content;
    if(width > 600){
        image.content = "#"
        image.src = data[0].imageDesk;
    }
    else image.src = data[0].imageMob;
    idx2++;
}
let backward = () => {
    if(idx1 < 0){
        idx1 = 2;
    }
    let data = arr.filter((item, i) => i == idx1);
    heading.innerText = data[0].heading;
    para.innerText = data[0].content;
    if(width > 600){
        image.src = data[0].imageDesk;
    }
    else image.src = data[0].imageMob;
    idx1--;
}
angle1.addEventListener('click', backward);
angle2.addEventListener('click', forward);
hamburg.addEventListener("click", handleHam);
close.addEventListener("click", handleClose);

