function changeText(){
    var paragraph = document.getElementById("ent");
    paragraph.innerHTML = "Welcome to my website.";
}

var button = document.getElementById("button"); 
var Watchdog = document.getElementById("WatchDog");
var career = document.getElementById("carrer");
// ボタンをクリックしたときの処理を設定
button.addEventListener("click",function(){
    // ボタンを非表示にする
    button.style.display = "none";
    // 写真を非表示にする
    WatchDog.style.display = "none";
    // 出身・経歴を表紙する
    career.style.display = "block";
});