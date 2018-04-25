/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "change_title")) {
    /*var src = document.getElementsByTagName("title")[0].innerHTML;
    var dst = msg.title;
    document.getElementsByTagName("title")[0].innerHTML = dst;
    sendResponse("the page title's changed: '" + src + "' -> '" + dst + "'");*/
    //var task_name = document.getElementsByClassName('simpleTextarea--dynamic')[0].innerHTML;
    var task_name = document.getElementsByTagName('title')[0].textContent;
    sendResponse(task_name);
  }
});
