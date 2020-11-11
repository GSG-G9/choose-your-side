function xhrRequest(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
      //handle more status results
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
