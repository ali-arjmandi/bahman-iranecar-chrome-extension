var cancelBtn = document.getElementById("cancelBtn");
var editBtn = document.getElementById("editBtn");
var sodurProvince = document.getElementById("sodurProvince");
var sodurCity = document.getElementById("sodurCity");
var birthProvince = document.getElementById("birthProvince");
var birthCity = document.getElementById("birthCity");
var addressProvince = document.getElementById("addressProvince");
var addressCity = document.getElementById("addressCity");

sodurProvince.addEventListener("change", function (e) {
    sodurCity.innerHTML = "";
    console.log(sodurProvince.value)
    if (provinces[sodurProvince.value]) {
        for (let city of provinces[sodurProvince.value]) {
            var opt = document.createElement('option');
            opt.innerHTML = city;
            sodurCity.appendChild(opt);
        }
    }
})
birthProvince.addEventListener("change", function (e) {
    birthCity.innerHTML = "";
    if (provinces[birthProvince.value]) {
        for (let city of provinces[birthProvince.value]) {
            var opt = document.createElement('option');
            opt.innerHTML = city;
            birthCity.appendChild(opt);
        }
    }
})
addressProvince.addEventListener("change", function (e) {
    addressCity.innerHTML = "";
    if (provinces[addressProvince.value]) {
        for (let city of provinces[addressProvince.value]) {
            var opt = document.createElement('option');
            opt.innerHTML = city;
            addressCity.appendChild(opt);
        }
    }
})
editBtn.addEventListener("click", function () {
    var data = $('#form').serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    users[editIndex] = data
    saveUsers();
    render("main");
})
cancelBtn.addEventListener("click", function () {
    editIndex = null;
    render("main");
})

for (let key of Object.keys(provinces)) {
    let opt = document.createElement('option');
    opt.innerHTML = key;
    sodurProvince.appendChild(opt);
    birthProvince.appendChild(opt.cloneNode(true));
    addressProvince.appendChild(opt.cloneNode(true));
}


for (let key of Object.keys(users[editIndex])) {
    var element = document.getElementsByName(key)[0];
    element.value = users[editIndex][key];
    if (element.nodeName === "SELECT") {
        var event = new Event('change');
        element.dispatchEvent(event);
    }
}