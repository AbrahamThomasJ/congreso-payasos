const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn_icon');
const dropDownMenu = document.querySelector('.dropdown_menu');


function openMenu(){
    dropDownMenu.classList.toggle('openMenu');
}


function toggleOpenCloseImgs(){
    const open = toggleBtn.children[0];
    const close = toggleBtn.children[1];

    const isOpen = open.classList.contains('open');
    const isClose = close.classList.contains('close');

    if(isOpen){
        open.classList.remove('open');
        open.classList.add('close');

        close.classList.remove('close');
        close.classList.add('open');
    } else {
        open.classList.remove('close');
        open.classList.add('open');

        close.classList.remove('open');
        close.classList.add('close');
    }
}


toggleBtn.addEventListener('click', function(){
    openMenu();
    toggleOpenCloseImgs();

});