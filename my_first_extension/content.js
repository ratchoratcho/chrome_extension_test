chrome.runtime.onMessage.addListener(
		function(request, sendler, sentResponse) {
				var content_title = document.getElementsByTagName('title')[0].textContent;
				//タイトルの名前を取得

				var content_title_array = content_title.split('-');
				var task_name = content_title_array[content_title_array.length - 2];
				//タスク名だけ抽出(余分な部分を覗く)

				chrome.runtime.sendMessage({ text : task_name });
				return true;
		}
);
