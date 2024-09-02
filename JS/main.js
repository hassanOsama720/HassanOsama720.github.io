let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let url = urlParams.get('url');

// redirect to /video.html if url is present with the same query string
if(url && !window.location.href.includes('video.html')){
    //remove index.html from the url
    let baseUrl = window.location.href;
    if (baseUrl.includes('index.html')) {
        baseUrl = baseUrl.replace('index.html','HTML/video.html');
    }else {
        baseUrl = baseUrl + '/HTML/video.html';
    }
    window.location.href = baseUrl;
}

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