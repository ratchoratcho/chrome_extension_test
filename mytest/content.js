var content_title = document.getElementsByTagName('title')[0].textContent;
//タスクの名前を取得

var content_title_slice1 = content_title.slice(26, -8);


chrome.runtime.sendMessage({
	//text: "text to be inserted to clipboard!!!!!!"
	text : content_title_slice1
});
