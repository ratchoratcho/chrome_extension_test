chrome.runtime.onMessage.addListener(
	function(request, sendler, sentResponse) {
		//タイトルの名前を取得
		let content_title = document.getElementsByTagName('title')[0].textContent;		

		//ヘッダー名(プロジェクト名など)を取得
		let header_element = document.getElementsByClassName('PageHeaderStructure-title')[0]
		let header_name = null;

		if (header_element) {
			header_name = document.getElementsByClassName('PageHeaderStructure-title')[0].textContent;
		}

		let task_name = null;
		if (header_name) {
			task_name = content_title.replace('● ', '').replace(header_name, '').replace(' - Asana', '').replace(' - ', '');
		} else {
			task_name = content_title.replace('● ', '').replace("Search", '').replace(' - Asana', '').replace(' - ', '');
		}
		
		chrome.runtime.sendMessage({ text : task_name });
		return true;
}
);
