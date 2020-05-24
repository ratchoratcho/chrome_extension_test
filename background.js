
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

		let task_array = [];
		for (var i=0; i<request.length; i++) {
			let task_name = request[i].title;
			let task_url = request[i].url;

			if (!task_url) {
				task_url = sender.tab.url;
			}

			let prefix = null;
			if (request.length > 1) {
				task_prefix = "- [ ] ";
			} else {
				task_prefix = "";
			}

			let gd_url = "https://is.gd/create.php?format=simple&url=" + task_url;
			let xhr = new XMLHttpRequest();
			xhr.open('GET', gd_url);
			xhr.onload = () => {
				let shorten_url = xhr.responseText;
				let answer = task_prefix + "[" + task_name + "]" + "(" + shorten_url + ")";
				
				task_array.push(answer);

				if (task_array.length == request.length) {
					saveToClipboard(task_array.join("\n"));
				}
				
				return true;
			};
			  xhr.onerror = () => {
				console.log("error!");
				return false;
			};
			xhr.send();
		}
	}
)


