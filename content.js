
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
		
		// タスク名の取得 (My Task)
		// TODO: マイタスク内のドキュメント取得がうまく行かない
		let task_name = null;

		let selected_tasks = document.getElementsByClassName("TaskRow TaskRow--highlighted");
		console.log(document.getElementsByClassName("TaskRow TaskRow--highlighted"));
		// console.log(selected_tasks[0].getElementsByTagName("textarea")[0].textContent);
		try {
			task_name = selected_tasks[0].getElementsByClassName("TaskName-input")[0].textContent;			
		} catch(e) {
			console.log("cannot fecth my task name");
		}

		// タスク名の取得
		let selected_tasks2 = document.getElementsByClassName("SpreadsheetCell--isHighlighted SpreadsheetCell--withShadedBackground SpreadsheetCell--withoutLeftBorder SpreadsheetCell SpreadsheetGridTaskNameCell SpreadsheetTaskRow-nameCell");
		let task_link = null;

		try {
			task_name = selected_tasks2[0].getElementsByTagName("textarea")[0].textContent;
			let task_id = selected_tasks2[0].getElementsByTagName("textarea")[0].id.replace("Pot.","").split("_");
			task_link = "https://app.asana.com/0/" + task_id[0] + "/" + task_id[2] + "/f";
			console.log(task_link);
		} catch(e) {
			console.log("cannot fecth task name");
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

		chrome.runtime.sendMessage({ text : link_text, task_url: task_link });
		return true;
	}
);
