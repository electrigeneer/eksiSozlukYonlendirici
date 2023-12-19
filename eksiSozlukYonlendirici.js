// ==UserScript==
// @name         Eskisozluk URL yönlendirici
// @namespace    electrigeneer
// @version      0.1
// @description  Google üzerindeki eksisozluk1923.com adresine tıklandığında otomatik olarak eksisozluk1999.com adresine yönlendirir
// @match        *://www.google.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?domain=eksisozluk.com
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(event) {
        var link = event.target.closest('a');
        // Özelleştirilebilir URL
        if (link && link.href.includes('eksisozluk1923.com')) {
            event.preventDefault();
            // Özelleştirilebilir URL
            var yeniURL = link.href.replace('eksisozluk1923.com', 'eksisozluk1999.com');
            window.location.href = yeniURL;
        }
    }, true);
})();
