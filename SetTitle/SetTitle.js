//SetTitle v1.0. SetTitle is a JavaScript extension by @OS-Scratch.
//SetTitle, as long as other ScriptTools library elements, is governed by the MIT license.
var setName
var name = (function () {
    /*Get the website name*/
    var websiteName = document.getElementById("WebTitle").innerHTML;
    /*Method*/
    return {
        getWebsiteName: function () {
            setName = websiteName;
            return websiteName;
        }
    }
})();

document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("WebsiteName");
    if (element) {
        element.innerHTML = "Hello";
    }
});

setName = document.getElementById("WebTitle").innerHTML;
var find = (function () {
    foundElements=document.getElementsByClassName("WebsiteName");  // Find the elements
    for(var i = 0; i < foundElements.length; i++){
        foundElements[i].innerText=setName;    // Change the content
    } 
})();
