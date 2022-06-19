const img = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
]

function getBackgroundImage() {
    const bgimage = img[Math.floor(Math.random() * img.length)];    
    document.documentElement.style.setProperty("--bgimage", "url(" + bgimage + ")");
    console.log(bgimage);
}

getBackgroundImage();
