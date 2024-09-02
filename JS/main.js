let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let url = urlParams.get('url');

// redirect to /video.html if url is present with the same query string
if(url && !window.location.href.includes('video.html')){
    // baseUrl without query string
    let baseUrl = window.location.href.split('?')[0];
    console.log(baseUrl);
    if (baseUrl.includes('index.html')) {
        baseUrl = baseUrl.replace('index.html','HTML/video.html');
    }else {
        //if the baseUrl ends with a slash
        if(baseUrl.endsWith('/')){
            baseUrl = baseUrl + 'HTML/video.html';
        }else{
            baseUrl = baseUrl + '/HTML/video.html';
        }
    }
    console.log(baseUrl);
    //window.location.href = baseUrl;
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