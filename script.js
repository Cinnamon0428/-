document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("warning").innerText =
    "⚠️ 這是一個模擬釣魚網站！請不要在不明網站輸入帳密！";
});