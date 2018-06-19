chrome.runtime.onMessage.addListener(
	function(request, sendler, sentResponse) {
		const mypage_title_class_name = "TopbarPageHeaderStructure-title";
		let mypage_title_element = document.getElementsByClassName("TopbarPageHeaderStructure-title")[0].textContent;

		//タイトルの名前を取得
		let content_title = document.getElementsByTagName('title')[0].textContent;

		let task_name = null;

		if (mypage_title_element) {
			task_name = content_title.replace('● ', '').replace(mypage_title_element, '').replace(' - Asana', '').replace(' - ', '');
		} else {
			task_name = content_title.replace('● ', '').replace("Search", '').replace(' - Asana', '').replace(' - ', '');
		}

		chrome.runtime.sendMessage({ text : task_name });
		return true;
	}
);
