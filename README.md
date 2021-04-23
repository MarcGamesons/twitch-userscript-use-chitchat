# Use Chit Chat

This is a userscript that replaces the chat on [Twitch](https://twitch.tv) with an embed of [Chit Chat](https://chitchat.ma.pe/) by [mape](https://twitter.com/mape).

<<<<<<< Updated upstream
=======
## Bookmarklet

Instead of downloading a UserScript you can create a bookmarklet.
To do so you need to:
1. Create a new bookmark.
2. Copy the code below
``` js
javascript:(function()%7B%2F%2F%20Get%20the%20container%20that%20contains%20the%20chat%20messages.%0Aconst%20chatContainer%20%3D%20document.querySelector(%22.chat-list--default%22)%3B%0A%0A%2F%2F%20Delete%20all%20child%20nodes.%0Awhile%20(chatContainer.firstChild)%20%7B%0A%20%20%20%20chatContainer.removeChild(chatContainer.firstChild)%3B%0A%7D%0A%0A%2F%2F%20Create%20an%20iframe%20and%20load%20ChitChat%20into%20it%0Aconst%20chatFrame%20%3D%20document.createElement(%22iframe%22)%3B%0Aconst%20casterURL%20%3D%20window.location.pathname.split('%2F')%3B%0A%2F%2F%20chatFrame.id%20%3D%20%22ChitChatFrame%22%3B%0AchatFrame.setAttribute(%22src%22%2C%20%22https%3A%2F%2Fchitchat.ma.pe%2F%22%20%2B%20casterURL%5B1%5D)%3B%0AchatFrame.style.width%20%3D%20%22100%25%22%3B%0AchatFrame.style.height%20%3D%20%2299%25%22%3B%0A%0A%2F%2F%20Append%20the%20iframe%20to%20the%20container%20that%20contains%20the%20chat%20messages.%0AchatContainer.appendChild(chatFrame)%3B%7D)()%3B
```
3. Paste the code into the URL field of the bookmark.
4. Name the bookmark what ever you want. (e.g. "Replace Twitch Chat with ChitChat")
5. Navigate to the stream you want to watch.
6. Click on the bookmarklet to replace chat with ChitChat.
To undo just reload the page.

>>>>>>> Stashed changes
## Installation

1. Make sure that you have installed the Tampermonkey browser extension. You can get it on [tampermonkey.net](https://www.tampermonkey.net/).
2. Install the userscript by clicking [this link](https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js).

## Usage

After installing the script make sure that it is enabled. It will then replace the chat automatically.

### Chit Chat is still not loading
Make sure that your browser or third party extensions don't block cookies nor local storage data.

## License

[MIT](https://choosealicense.com/licenses/mit/)
