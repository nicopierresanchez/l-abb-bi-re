
class carousel {
    
    
    constructor(element, options = {}) {

    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    new carousel(document.querySelector('.pictures'), {
        slidesToScroll: 4,
        slidesVisible: 1
    })
})
