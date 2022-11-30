let animation = document.querySelectorAll(".animation");

function showScroll() {
    let scrollTop = 
    document.documentElement.scrollTop;
    for (var i=0; i < animation.length; i++) {
        let heightAnimation = animation[i].offsetTop;
        if(heightAnimation -500 < scrollTop) {
            animation[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll) 