chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var path = getImage();
    var title = document.querySelector('title')
    
    console.log('content:', path)
    sendResponse({
        path: path,
        title: title ? title.textContent : '',
        url: location.href
    });
});

function getImage () {
    var img = document.querySelector('meta[property="og:image"]');
    var path = '';
    if (!img) {
        img = document.querySelector('img');
        if (img) {
            img = img.getAttribute('src');
            if (img.indexOf('http') == 0) {
                path = img
            } else if (img.indexOf('//') == 0) {
                path = 'http:' + img;
            } else {
                path = location.hostname + img;
            }
        } else {
            return '画像なし';
        }
    } else {
        path = img.getAttribute('content')
    }
    return path;
}