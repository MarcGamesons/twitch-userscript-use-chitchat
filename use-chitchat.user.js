// ==UserScript==
// @name         Use ChitChat
// @namespace    http://github.com/marcgamesons
// @version      1.4
// @updateURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js
// @downloadURL	 https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js
// @description  Replaces Twitch's default chat with https://chitchat.ma.pe by https://twitter.com/mape
// @author       https://github.com/MarcGamesons/twitch-userscript-use-chitchat
// @license      MIT - https://opensource.org/licenses/MIT
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

var onDOMReady = function () {
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

    let originalHref = document.location.href;

    // Select the node that will be observed for mutations
    const chatContentTargetNode = document.querySelector('.chat-shell');
    const hrefChangedTargetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const chatContentLoadedConfig = { childList: true, subtree: true };
    const hrefChangedConfig = { childList: true, subtree: true };

    // Callback function to execute when chatContent mutations are observed
    const chatContentLoadedCallback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(addedNode => {
                    if (addedNode.classList !== undefined) {
                        if (addedNode.classList.contains("chat-line__message")) {
                            replaceTwitchChat();
                            observer.disconnect();
                        }
                    }
                });
            }
        }
    };

    // Callback function to execute when hrefChagend mutations are observed
    const hrefChangedCallback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (originalHref != document.location.href) {
                    originalHref = document.location.href;
                    chatContentLoadedObserver.observe(chatContentTargetNode, chatContentLoadedConfig);
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    const chatContentLoadedObserver = new MutationObserver(chatContentLoadedCallback);
    const hrefChangedObserver = new MutationObserver(hrefChangedCallback);

    // Start observing the target node for configured mutations
    chatContentLoadedObserver.observe(chatContentTargetNode, chatContentLoadedConfig);
    hrefChangedObserver.observe(hrefChangedTargetNode, hrefChangedConfig);
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    onDOMReady();
} else {
    document.addEventListener("DOMContentLoaded", onDOMReady);
}