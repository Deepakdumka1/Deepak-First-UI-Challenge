var iconShareBlock = document.querySelector('.icon-share'),
    iShare = document.querySelector('.i-share'),
    network = document.querySelector('.network');

iconShareBlock.addEventListener('click',function(){

    if(network.style.visibility === 'hidden' || network.style.visibility === ''){
        network.style.visibility = 'visible';

        this.style.background = 'var(--desaturated-dark-blue)';

        iShare.style.fill = 'var(--light-grayish-blue)';
        return
    }

    network.style.visibility = 'hidden';
    this.style.background = '';
    iShare.style.fill = '';
})