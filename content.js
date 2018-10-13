
chrome.runtime.onMessage.addListener(
	function(request, sendler, sentResponse) {
		// チーム名の取得
		let team_name = null;
		try {
			team_name = document.getElementsByClassName("TopbarPageHeaderView-title")[0].textContent;			
		} catch (e) {
			console.log("cannot fetch team name");
		}

		// プロジェクト名の取得
		let project_name = null;
		try {
			project_name = document.getElementsByClassName("TopbarPageHeaderStructure-title")[0].textContent;
		} catch(e) {
			console.log("cannot fecth project name");
		}
		
		// タスク名の取得
		let task_name = null;

		let page_title = document.getElementsByTagName('title')[0].textContent;
		if (project_name) {
			task_name = page_title.replace('● ', '').replace(project_name, '').replace(' - Asana', '').replace(' - ', '');
		}

		// リンクテキストの生成
		let link_text = null;
		if (task_name) {
			link_text = task_name;
		} else if (project_name) {
			link_text = "**" + project_name + "**";
		} else if (team_name) {
			link_text = "**```" + team_name + "```**";
		}

		chrome.runtime.sendMessage({ text : link_text });
		return true;
	}
);
