const hijos = document.querySelectorAll('.box-phrases-son');

let i = 0;

let timeoutId;

function alternateShowing(){
    if(hijos.length === 0) return;

    hijos[i].classList.add("animation-applied");

    if(i > 0){
        hijos[i - 1].classList.remove('animation-applied');
    } else {
        hijos[hijos.length -1].classList.remove('animation-applied');
    }

    i = (i + 1) % hijos.length;

    timeoutId = setTimeout(alternateShowing,6000);

}

function handleVisibilityChange(){
    if(document.hidden){
        clearTimeout(timeoutId); // Stop function when page is not visible
        console.log('Page hidden, aniation stopped');
    } else {
        alternateShowing(); // Resume function
        console.log('Page visible, animation resumed');
    }
}

//Hear visibilityChange event
document.addEventListener('visibilitychange',handleVisibilityChange);

alternateShowing();
