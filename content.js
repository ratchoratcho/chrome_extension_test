chrome.runtime.onMessage.addListener(
	function(request, sendler, sentResponse) {
		const task_title_class = "ProjectPageHeader-projectName--colorNone ProjectPageHeader-projectName";

		//タイトルの名前を取得
		let content_title = document.getElementsByTagName('title')[0].textContent;		

		//ヘッダー名(プロジェクト名など)を取得
		let header_element = document.getElementsByClassName(task_title_class)[0]
		let header_name = null;

		if (header_element) {
			header_name = document.getElementsByClassName(task_title_class)[0].title;
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
