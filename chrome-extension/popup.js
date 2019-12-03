const data = {"Title": "", "URL": ""}

chrome.tabs.getSelected(tab => {  // 現在のタブを取得
  data.Title = tab.title;  // tabに現在のタブが格納されている（？）。
  data.URL = tab.url;    // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。
  console.log(`Title: ${data.Title}`);  // 出力は、「ポップアップを検証」で見れる。
  console.log(`URL: ${data.URL}`);
  $('input[name="url"]').val(data.URL);
});
  

$("#btn").on("click", () => {
  chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
    console.log(response);
  });
});