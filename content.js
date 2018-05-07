chrome.runtime.onMessage.addListener(
		function(request, sendler, sentResponse) {
				var content_title = document.getElementsByTagName('title')[0].textContent;
				//タイトルの名前を取得

				var header_name = document.getElementsByClassName('PageHeaderStructure-title')[0].textContent;
				//ヘッダー名(プロジェクト名など)を取得

				var task_name = content_title.replace('●', '').replace(header_name, '').replace(' - Asana', '').replace(' - ', '');
				//必要な部分だけ残す

				chrome.runtime.sendMessage({ text : task_name });
				return true;
		}
);
