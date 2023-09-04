// image preview
const Img = document.querySelectorAll(".zoom");
const ImgShow = document.querySelector(".imgShow");
Img.forEach((img) => {
    img.addEventListener("click", () => {
        let clone = img.cloneNode(true);
        ImgShow.appendChild(clone);
        ImgShow.style.display = "flex";
    });
});

ImgShow.addEventListener("click", () => {
    ImgShow.removeChild(ImgShow.lastElementChild);
    ImgShow.style.display = "none";
});


// navButton
const navButton = document.querySelector('.navButton')
const nav = document.querySelector('nav')
const navItem = document.querySelectorAll('nav ul li a')
navButton.addEventListener("click", () => {
    nav.classList.toggle('on')
    navButton.classList.toggle('close')
})

navItem.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove('on')
        navButton.classList.remove('close')
    })
});


// to top
const toTopButton = document.querySelector(".toTopButton");

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}