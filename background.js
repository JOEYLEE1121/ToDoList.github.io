const img = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
]

function getBackgroundImage() {
    const bgimage = img[Math.floor(Math.random() * img.length)];    
    document.documentElement.style.setProperty("--bgimage", "url(" + bgimage + ")");
    console.log(bgimage);
}

getBackgroundImage();