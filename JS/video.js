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

document.querySelector('.video').addEventListener('mousemove',skipButtons);
document.querySelector('.video').addEventListener('touchstart',skipButtons);
document.querySelector('#forward').addEventListener('touchstart',function (event) {
    document.getElementById('video').currentTime += 10;
});
document.querySelector('#forward').addEventListener('click',function (event) {
    document.getElementById('video').currentTime += 10;
});
document.querySelector('#backward').addEventListener('touchstart',function (event) {
    document.getElementById('video').currentTime -= 10;
});
document.querySelector('#backward').addEventListener('click',function (event) {
    document.getElementById('video').currentTime -= 10;
});
document.querySelector('#play-stop').addEventListener('click',function (event) {
    let video = document.getElementById('video');
    if(video.paused){
        video.play();
        document.querySelector('#play').style.display = 'none';
        document.querySelector('#stop').style.display = 'flex';
    }else {
        video.pause();
        document.querySelector('#play').style.display = 'flex';
        document.querySelector('#stop').style.display = 'none';
    }
});
let timeout;
function skipButtons (event) {
    document.querySelectorAll('.skip').forEach((item) => {
        item.style.display = 'flex';
    });
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        document.querySelectorAll('.skip').forEach((item) => {
            item.style.display = 'none';
        });
    },3000);
}
