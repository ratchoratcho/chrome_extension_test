
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
		let tasks = [];
		let temp_class = ["ItemRow--highlighted", "ItemRow--focused", "SpreadsheetRow SpreadsheetRow--withShadedBackground"];

		// タスク名の取得
		for (var j=0; j<3; j++) {
			let selected_tasks = document.getElementsByClassName(temp_class[j]);

			for (var i=0; i<selected_tasks.length; i++) { 
				let task_name = null;
				let task_link = null;			
				try {
					task_name = selected_tasks[i].getElementsByTagName("textarea")[0].textContent;
					let task_id = selected_tasks[i].getElementsByTagName("textarea")[0].id.split(".")[1].split("_");
					task_link = "https://app.asana.com/0/" + task_id[0] + "/" + task_id[2] + "";

					tasks.push({title: task_name, url: task_link});
				} catch(e) {
					console.log(e);
				}
			}
		}

		// リンクテキストの生成
		let md_links = null;

		if (tasks.length) {
			md_links = tasks;
		} else if (project_name) {
			let link_text = "**" + project_name + "**";
			md_links = [{ title : link_text, url: task_link }];
		} else if (team_name) {
			let link_text = "**```" + team_name + "```**";
			md_links = [{ title : link_text, url: task_link }];
		}
		
		chrome.runtime.sendMessage(md_links);
		return true;
	}
);
