chrome.runtime.onMessage.addListener(
		function(request, sendler, sentResponse) {
				var content_title = document.getElementsByTagName('title')[0].textContent;
				//タスクの名前を取得

				var content_title_slice1 = content_title.slice(26, -8);
				//タスク名だけ抽出(余分な部分を覗く)

				chrome.runtime.sendMessage({ text : content_title_slice1 });
				return true;
		}
);
