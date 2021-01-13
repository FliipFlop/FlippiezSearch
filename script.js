function appendImage(imageName , index) {
    const imgElem = document.createElement('img')
    const imgSrc = 'https://source.unsplash.com/400x225/?' + imageName + '&sig=' + index;
    imgElem.src = imgSrc;

    const container = document.querySelector('.container');
    container.appendChild(imgElem);
}

function run() {
    const search = document.getElementById('TextboxSearch')
    search.addEventListener('keydown' , searchImage);
}

function clearContainer() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

function searchImage(event) {
    if(event.key === 'Enter' && event.target.value) {
        clearContainer();
        for (let index = 1; index <= 9; index++) {
            appendImage(event.target.value, index)   
        }
    }
}

run();