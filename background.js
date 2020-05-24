
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
				prefix = "- [ ] ";
			} else {
				prefix = "";
			}

			task_array.push(prefix + "[" + task_name + "]" + "(" + task_url + ")");
		}

		saveToClipboard(task_array.join("\n"));

		// let url = "https://is.gd/create.php?format=simple&url=" + original_url;
		// let xhr = new XMLHttpRequest();
		// xhr.open('GET', url);
		// xhr.onload = () => {
		// 	let shorten_url = xhr.responseText;

		// 	let link_text = md_link.title;			

		// 	let answer = "[" + link_text + "]" + "(" + shorten_url + ")";
		// 	saveToClipboard(answer);
		// 	return true;
		// };
		//   xhr.onerror = () => {
		// 	console.log("error!");
		// 	return false;
		// };
		// xhr.send();
	}
)


