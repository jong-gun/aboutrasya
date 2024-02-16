var listName = document.querySelector('.list-sosmed');
var nav = document.querySelector('nav');
document.addEventListener("scroll",function () {
    if(window.scrollY > 204){
        nav.style.backgroundColor = "#f6f6f6"
        nav.style.color = "#414141"
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.color = "black"
    }
})
