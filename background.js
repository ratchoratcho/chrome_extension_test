
function saveToClipboard(str) {
    let textArea = document.createElement("textarea");
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

		let url = "https://is.gd/create.php?format=simple&url=" + sender.tab.url;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = () => {
			let shorten_url = xhr.responseText;

			let answer = "[" + request.text + "]" + "(" + shorten_url + ")";
			saveToClipboard(answer);
			return true;
		};
		  xhr.onerror = () => {
			console.log("error!");
			return false;
		};
		xhr.send();
	}
)


