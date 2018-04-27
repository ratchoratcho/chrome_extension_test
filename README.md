# copy_link_for_asana
- DOMの操作がcontent.jsからしかできないらしいのでbackground.jsとのやりとり
- urlはうまくコピーできるからcontentとbackgroundのやりとりがうまくいってない(undifinedになる)

# mytest
- titleタグの場合はcontent.jsからその内容を取得してクリップボードにコピーできたけどタスク名じゃなくて[app.asana.com] -> タスク名だけ取得できた
- classから取得しようと思うとできない -> タイトルから取得できたから無視
- クリックによってコピーできるわけじゃなくてページを表示した時にコピーされる
- manifestのcontent.jsが使われるmatchesの編集がうまくいかない -> clear
