// ==UserScript==
// @name         Your Mourn Is Not Mine
// @namespace    https://github.com/distLiF
// @version      0.1
// @description  πδ½ ηεζΌδΈζ―ζη
// @author       distLiF
// @match        *://*/*
// @icon         
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    document.getElementsByTagName("html")[0].setAttribute("style", document.getElementsByTagName("html")[0].getAttribute("style") + "-webkit-filter:none;filter:none;-ms-filter:none;-o-filter:none;");
    document.getElementsByTagName("body")[0].setAttribute("style", document.getElementsByTagName("body")[0].getAttribute("style") + "-webkit-filter:none;filter:none;-ms-filter:none;-o-filter:none;");
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute("style", divs[i].getAttribute("style") + "-webkit-filter:none;filter:none;-ms-filter:none;-o-filter:none;");
    }
    var imgs = document.getElementsByTagName("img");
    for (var j = 0; j < divs.length; j++) {
        imgs[j].setAttribute("style", imgs[j].getAttribute("style") + "-webkit-filter:none;filter:none;-ms-filter:none;-o-filter:none;");
    }
})();
