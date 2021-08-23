var users = [];
var provinces = {};
var editIndex = null;

function render(component) {
    $.ajax({
        type: "GET",
        url: "./" + component + "/" + component + ".html",
        dataType: "text",
        success: function (data) {
            const body = document.getElementById('body');
            body.innerHTML = data
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "./" + component + "/" + component + ".js";
            body.appendChild(script);
        }
    });
}

function sendToFront(type, data = null) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "type": type,
            "data": data
        });
    });
}

function saveUsers() {
    localStorage.setItem("bahman_users", JSON.stringify({
        users: users
    }))
}

$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem('bahman_users'))
    if (data) users = data.users
    else localStorage.setItem("bahman_users", JSON.stringify({
        users: []
    }))
    $.ajax({
        type: "GET",
        url: "./assets/province.json",
        dataType: "json",
        success: function (data) {
            provinces = data
        }
    });

    render("main");


});