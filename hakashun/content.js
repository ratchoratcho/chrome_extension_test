// NOTE:- 監視したい対象となるDOMを取得
var target = document.querySelector('head > title');
var observer = new window.MutationObserver(
    function(mutations) {
        mutations.forEach(function(mutation) {
            handleChangeTitle(mutation.target.textContent)
        });
    }
);

// NOTE:- 監視をスタート
observer.observe(target, { subtree: true, characterData: true, childList: true });

// NOTE:- 初期状態をbackground.jsに送信
handleChangeTitle(target.textContent);

//
// Utils
//

/**
 * parser
 *
 * Title要素から取得した文字列から、必要な部分を切り取って返す
 */
function parser(content_title) {
    return content_title.slice(26, -8);
}

/**
 * handleChangeTitle
 *
 * Title要素に変更があった際にbackground.jsにメッセージを送信する
 */
function handleChangeTitle(title) {
    chrome.runtime.sendMessage({
        //text: "text to be inserted to clipboard!!!!!!"
        text : parser(title)
    });
}
