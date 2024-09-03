//let queryString = window.location.search;
//let urlParams = new URLSearchParams(queryString);
//let url = urlParams.get('url');
let watchCount = urlParams.get('watchCount') ?? 0;
let commentCount = urlParams.get('commentsCount') ?? 0;
let likeCount = urlParams.get('likes') ?? 0;
let shareCount = urlParams.get('sharesCount') ?? 0;
document.getElementById('video').src = url;
document.getElementById('video').play();
document.getElementById('watchCount').innerText = watchCount;
document.getElementById('commentCount').innerText = commentCount;
document.getElementById('likeCount').innerText = likeCount;
document.getElementById('shareCount').innerText = shareCount;


document.querySelector('.video-button').addEventListener('click',function (event) {
    if (!document.fullscreenElement) {
        const wrapper = document.querySelector('.video');
        const fullscreenApi = wrapper.requestFullscreen();
        if (!document.fullscreenElement) {
            fullscreenApi.call(wrapper);
        }
        else {
            console.log('fullscreen');
            document.exitFullscreen();
        }
    }else {
        document.exitFullscreen();
    }
})