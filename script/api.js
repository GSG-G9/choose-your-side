function xhrRequest(url, callback) {
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const response = JSON.parse(xhr.responseText);
          callback(response);
         }else if (xhr.status == 404){ 
          handleError( "page Not found..!")
       }else {
         handleError( `internal error ${xhr.status}, ${xhr.responseText}`)
       }
     
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  const bodyHtml = document.querySelector("body"); 
  function handleError(error){
    const pageError = document.createElement("p"); 
    pageError.textContent =error; 
    bodyHtml.appendChild(pageError)
}