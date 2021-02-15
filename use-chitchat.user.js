// ==UserScript==
// @name         Use ChitChat
// @namespace    http://github.com/marcgamesons
// @version      1.4.3
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
        const chatContainer = document.querySelector(".chat-list--default");

        // Delete all child nodes.
        while (chatContainer.firstChild) {
            chatContainer.removeChild(chatContainer.firstChild);
        }

        // Create an iframe and load ChitChat into it
        const chatFrame = document.createElement("iframe");
        const casterURL = window.location.pathname.split('/');
        // chatFrame.id = "ChitChatFrame";
        chatFrame.setAttribute("src", "https://chitchat.ma.pe/" + casterURL[1]);
        chatFrame.style.width = "100%";
        chatFrame.style.height = "99%";

        // Append the iframe to the container that contains the chat messages.
        chatContainer.appendChild(chatFrame);
    }

    // Store the href so we can check if it changes.
    let originalHref = document.location.href;

    // Select the node that will be observed for mutations
    // Selecting the body will avoid some errors that can raise with the MutationObserver.
    const observerTargetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const observerConfig = { childList: true, subtree: true };

    // Callback function to execute when chat mutations are observed
    const chatStatusCallback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(addedNode => {
                    if (addedNode.classList !== undefined) {
                        // This is a container that stores the 'welcome to the chatroom' message.
                        // So far this has been the most reliable node to check against.
                        if (addedNode.classList.contains("chat-line__status")) {
                            replaceTwitchChat();
                            observer.disconnect();
                        }
                    }
                });
            }
        }
    };

    // Callback function to execute when mutations of the documents href are observed
    const hrefObservationCallback = function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (originalHref != document.location.href) {
                    originalHref = document.location.href;
                    chatStatusObserver.observe(observerTargetNode, observerConfig);
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    const chatStatusObserver = new MutationObserver(chatStatusCallback);
    const hrefObserver = new MutationObserver(hrefObservationCallback);

    // Start observing the target node for configured mutations
    chatStatusObserver.observe(observerTargetNode, observerConfig);
    hrefObserver.observe(observerTargetNode, observerConfig);
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    onDOMReady();
} else {
    document.addEventListener("DOMContentLoaded", onDOMReady);
}