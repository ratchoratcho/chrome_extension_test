
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

		let md_link = request[0]

		let task_link = md_link.url;

		let original_url = null;
		if (task_link) {
			original_url = task_link;
		} else {
			original_url = sender.tab.url;
		}

		let url = "https://is.gd/create.php?format=simple&url=" + original_url;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = () => {
			let shorten_url = xhr.responseText;

			let link_text = md_link.title;			

			let answer = "[" + link_text + "]" + "(" + shorten_url + ")";
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


