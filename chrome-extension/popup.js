
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { color: "black" }, function (response) {
        console.log(response)
        if (!response) {
            return false;
        }
        if (response['title']) {
            $('.js-title').text(response.title);
            $('input[name="title"]').val(response.title);
        }

        if (response['path']) {
            $('.js-image').removeClass('no-image').css('background-image', "url('" + response.path + "')");
            $('input[name="img"]').val(response.path);
        }

        if (response['url']) {
            $('input[name="url"]').val(response.url);
        }
    });
});

/**
 * 送信したら閉じる
 */
$("form").on("submit", (e) => {
    setTimeout(function () {
        alert('stockしました🎉');
        window.close();
    }, 300);
});
