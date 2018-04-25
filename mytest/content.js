//var content_title = document.getElementsByTagName('title')[0].textContent;
var task_name = document.getElementsByClassName('simpleTextarea--dynamic simpleTextarea autogrowTextarea')[0].textContent;

chrome.runtime.sendMessage({
	//text: "text to be inserted to clipboard!!!!!!"
	//text : content_title
	text : task_name
});
