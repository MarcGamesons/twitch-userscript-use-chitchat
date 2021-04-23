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
