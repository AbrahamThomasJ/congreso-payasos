



const representativeBiographyContainer = document.querySelector('representative-biography-container');

const congressMainSectionH2 = document.querySelector('.congress-main-section-h2');

const congressMainSectionP = document.querySelector('congress-main-section-p');

const boxPhrasesSonContainer = document.querySelector('box-phrases-son-container');

document.fonts.onloadingdone = function(){
    document.body.classList.add('fonts-loaded-noto');

    representativeBiographyContainer.classList.add('fonts-loaded-anton');

    congressMainSectionH2.classList.add('fonts-loaded-anton');

    congressMainSectionP.classList.add('fonts-loaded-anton');

    boxPhrasesSonContainer.classList.add('fonts-loaded-edutas');
    
};
