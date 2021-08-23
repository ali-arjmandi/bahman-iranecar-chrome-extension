var excludes = ["issuance_place_city", "birth_place_city", "address_city"]

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function print(data) {
  for (let key of Object.keys(data)) {
    if (excludes.includes(key)) continue;
    var element = document.getElementsByName(key)[0];
    var event = new Event('click');
    element.dispatchEvent(event);
    element.value = data[key];
    if (element.nodeName === "SELECT") {
      console.log(element.options)
      console.log(element.options[0])
      console.log(Object.keys(element.options))
      var optIndex = Object.keys(element.options).filter((optKey) => {
        return element.options[optKey].innerHTML === data[key]
      })
      element.value = element.options[optIndex[0]].value;
      // console.log(data[key], optIndex)
    }
    var event = new Event('change');
    element.dispatchEvent(event);
    console.log("ssssss")
  }
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    switch (request.type) {
      case "print":
        print(request.data)
        break;
    }
  }
);