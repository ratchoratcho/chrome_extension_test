function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

		textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}

chrome.browserAction.onClicked.addListener(function(tab) {
	  chrome.tabs.sendMessage(tab.id, {text : "active content.js"} );
});

chrome.runtime.onMessage.addListener(
		function(request, sender, sentResponse) {
			   var answer = "[" + request.text + "]" + "(" + sender.tab.url + ")";
			   saveToClipboard(answer);
			   return true;
		}
)
