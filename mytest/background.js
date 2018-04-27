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
var task_name;
chrome.runtime.onMessage.addListener(
		function(request, sendler, sentResponse) {
			task_name = request.text;
		}
);

chrome.browserAction.onClicked.addListener(function(tab) {
    var answer = "[" + task_name + "]" + "(" + tab.url　+ ")";
		saveToClipboard(answer);
});
