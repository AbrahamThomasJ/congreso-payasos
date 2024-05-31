document.addEventListener('DOMContentLoaded', () => {
    const representativeBiographyContainer = document.querySelector('.representative-biography-container');
    const congressMainSectionH2 = document.querySelector('.congress-main-section-h2');
    const congressMainSectionP = document.querySelector('.congress-main-section-p');
    const boxPhrasesSonContainer = document.querySelector('.box-phrases-son-container');

    document.fonts.onloadingdone = function() {
        document.body.classList.add('fonts-loaded-noto');
        
        if (representativeBiographyContainer) {
            representativeBiographyContainer.classList.add('fonts-loaded-anton');
        }

        if (congressMainSectionH2) {
            congressMainSectionH2.classList.add('fonts-loaded-anton');
        }

        if (congressMainSectionP) {
            congressMainSectionP.classList.add('fonts-loaded-anton');
        }

        if (boxPhrasesSonContainer) {
            boxPhrasesSonContainer.classList.add('fonts-loaded-edutas');
        }
    };
});