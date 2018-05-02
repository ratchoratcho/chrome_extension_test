/**
 * 現在表示中のタスク名を保持する
 */
var task_name;

chrome.runtime.onMessage.addListener(handleMessage);
chrome.browserAction.onClicked.addListener(handleClick);

//
// Utils
//

/**
 * handleMessage
 *
 * content.jsから送られたイベントを受信して、タスク名を更新する
 */
function handleMessage(request) {
    task_name = request.text;
}

/**
 * handleClick
 *
 * Extensionのボタンが押された際に、マークダウン文字列を作成して
 * saveToClipboardを実行する
 */
function handleClick(tab) {
    var answer = "[" + task_name + "]" + "(" + tab.url　+ ")";
    saveToClipboard(answer);
}

/**
 * saveToClipboard
 *
 * 与えられた文字列をクリップボードにコピーする
 */
function saveToClipboard(str) {
    // copy 用に textareaを作る
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";

    document.body.appendChild(textArea);

    //textArea.value = "[" + str + "]";
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}
