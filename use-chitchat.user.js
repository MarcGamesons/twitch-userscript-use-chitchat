// ==UserScript==
// @name         Use ChitChat
// @namespace    http://github.com/marcgamesons
// @version      1.3.2
// @updateURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js
// @downloadURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js
// @description  Replaces Twitch's default chat with https://chitchat.ma.pe by https://twitter.com/mape
// @author       https://github.com/MarcGamesons/twitch-userscript-use-chitchat
// @license      MIT - https://opensource.org/licenses/MIT
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function replaceTwitchChat() {
        // Get the container that contains the chat messages.
        var chatContainer = document.querySelector(".chat-list");

        // Delete all child nodes.
        while (chatContainer.firstChild) {
            chatContainer.removeChild(chatContainer.firstChild);
        }

        // Create an iframe and load ChitChat into it
        var ifrm = document.createElement("iframe");
        var casterURL = window.location.pathname.split('/');
        ifrm.id = "ChitChatFrame";
        ifrm.setAttribute("src", "https://chitchat.ma.pe/" + casterURL[1]);
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";

        // Append the iframe to the container that contains the chat messages.
        chatContainer.appendChild(ifrm);
    }

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('.chat-shell');

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(addedNode => {
                    if (addedNode.classList !== undefined) {
                        if (addedNode.classList.contains("chat-line__message")) {
                            observer.disconnect();
                            replaceTwitchChat();
                        }
                    }
                });
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
})();