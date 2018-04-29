function saveToClipboard(str) {
    // copy 用に textareaを作る
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    //textArea.value = "[" + str + "]";
		textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}

chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.sendMessage(tab.id, {text : "active content.js"} );

	chrome.runtime.onMessage.addListener(
			function(request, sendler, sentResponse) {
				var answer = "[" + request.text + "]" + "(" + tab.url + ")";
				cosole.log("bbb");
				saveToClipboard(answer);
				return true;
			}
	);
});
