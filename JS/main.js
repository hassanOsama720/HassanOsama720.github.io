window.addEventListener('mouseup',function(event){
    let search = document.querySelector('.search');
    let isClickInside = false
    event.target.classList.forEach((item) => {
        if(item.includes('gsc')){
            isClickInside = true;
        }
    });
    if(!isClickInside){
        search.style.display = 'none';
    }
});

document.querySelector('.search-button').addEventListener('click',function(){
    let search = document.querySelector('.search');
    search.style.display = 'inherit';
})