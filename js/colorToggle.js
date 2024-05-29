const lightModeBtn = document.getElementById("light-mode-button");
const darkModeBtn = document.getElementById("dark-mode-button");

/*Mobile variables*/
const lightModeBtnMobile = document.getElementById("light-mode-button-mobile");
const darkModeBtnMobile = document.getElementById("dark-mode-button-mobile"); 



lightModeBtn.addEventListener("click",setDarkMode);
darkModeBtn.addEventListener("click",setLightMode);

lightModeBtnMobile.addEventListener("click",setDarkMode);
darkModeBtnMobile.addEventListener("click",setLightMode);


function setDarkMode(){
    __setUserTheme("dark");
}

function setLightMode(){
    __setUserTheme("light");
}
