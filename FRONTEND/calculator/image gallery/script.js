function openImage(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}