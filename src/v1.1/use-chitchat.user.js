// ==UserScript==
// @name         Use ChitChat
// @namespace    http://github.com/marcgamesons
// @version      1.1
// @updateURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/src/update/use-chitchat.user.js
// @downloadURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/src/update/use-chitchat.user.js
// @description  Replaces Twitch's default chat with https://chitchat.ma.pe by https://twitter.com/mape
// @author       https://github.com/MarcGamesons/twitch-userscript-use-chitchat
// @license	 MIT - https://opensource.org/licenses/MIT
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Wait 15 seconds so that the site can load fully (even if you use add-ons like FFZ).
    window.setTimeout(function(){

        // Get the container that contains the chat messages.
        var node = document.getElementsByClassName("chat-list__lines"); // v1.0 used "chat-messages".

        // Delete all child nodes.
        while (node[0].firstChild) {
            node[0].removeChild(node[0].firstChild);
        }

        // Create an iframe and load ChitChat into it
        var ifrm = document.createElement("iframe");
        var casterURL = window.location.pathname.split('/');
        ifrm.setAttribute("src", "https://chitchat.ma.pe/" + casterURL[1]);
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";

        // Append the iframe to the container that contains the chat messages.
        node[0].appendChild(ifrm);

    }, 15000);
})();
