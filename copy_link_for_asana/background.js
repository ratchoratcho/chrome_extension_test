chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
      command: "change_title",
      title: "hoge"
      //url: tab.url
    },
    function(msg) {
      //console.log("result message:", msg);
      var text_area = document.createElement('textarea');
      text_area.textContent = msg + ':' + tab.url;
      document.body.appendChild(text_area);
      text_area.select();
      document.execCommand('copy');
      document.body.removeChild(text_area);
    });
});
