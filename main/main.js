var card_body = document.getElementById("card_body");
if (users.length) {
    let html = `<h5 class="card-title">اطلاعات مشتری</h5><div class="list-group">`;
    for (let i = 0; i < users.length; i++) {
        html += `<div class="list-group-item list-group-item-action info" value="${i}">
        <div class="d-flex justify-content-between">
        <div>${users[i].first_name} ${users[i].last_name}</div>
        <div class="row">
            <div type="button" value="${i}" class="edit" style="color:blue;"><i class="fa fa-pencil-square-o"></i></div>
            <div type="button" value="${i}" class="delete mr-2" style="color:red;"><i class="fa fa-trash"></i></div>
        </div>
        </div>
        </div>`
    }
    html += `</div>`
    card_body.innerHTML = html
} else {
    card_body.innerHTML = `<h5 class="card-title">اطلاعات مشتری</h5>
    <p>هیچ مشتری ای تعریف نشده!</p>`;
}
$(".delete").click(function (e) {
    var index = e.currentTarget.attributes.value.nodeValue;
    users.splice(index, 1);
    saveUsers();
    render("main")
});

$(".edit").click(function (e) {
    editIndex = e.currentTarget.attributes.value.nodeValue;
    render("edit")
});

$(".info").click(function (e) {
    index = e.currentTarget.attributes.value.nodeValue;
    sendToFront("print", users[index]);
});

document.getElementById("addUserBtn").addEventListener("click", function () {
    sendToFront("addUser");
    render("add");
})