# Use Chit Chat

This is a userscript that replaces the chat on [Twitch](https://twitch.tv) with an embed of [Chit Chat](https://chitchat.ma.pe/) by [mape](https://twitter.com/mape).

## Bookmarklet

Instead of downloading a UserScript you can create a bookmarklet. To do so you need to create a new bookmark and use the code below as url. To load ChitChat click it after the Twitch chat has loaded. To undo reload the page that has loaded the Twitch chat.

``` js
javascript:(function()%7B%2F%2F%20Get%20the%20container%20that%20contains%20the%20chat%20messages.%0Aconst%20chatContainer%20%3D%20document.querySelector(%22.chat-list--default%22)%3B%0A%0A%2F%2F%20Delete%20all%20child%20nodes.%0Awhile%20(chatContainer.firstChild)%20%7B%0A%20%20%20%20chatContainer.removeChild(chatContainer.firstChild)%3B%0A%7D%0A%0A%2F%2F%20Create%20an%20iframe%20and%20load%20ChitChat%20into%20it%0Aconst%20chatFrame%20%3D%20document.createElement(%22iframe%22)%3B%0Aconst%20casterURL%20%3D%20window.location.pathname.split('%2F')%3B%0A%2F%2F%20chatFrame.id%20%3D%20%22ChitChatFrame%22%3B%0AchatFrame.setAttribute(%22src%22%2C%20%22https%3A%2F%2Fchitchat.ma.pe%2F%22%20%2B%20casterURL%5B1%5D)%3B%0AchatFrame.style.width%20%3D%20%22100%25%22%3B%0AchatFrame.style.height%20%3D%20%2299%25%22%3B%0A%0A%2F%2F%20Append%20the%20iframe%20to%20the%20container%20that%20contains%20the%20chat%20messages.%0AchatContainer.appendChild(chatFrame)%3B%7D)()%3B
```

## Installation

1. Make sure that you have installed the Tampermonkey browser extension. You can get it on [tampermonkey.net](https://www.tampermonkey.net/).
2. Install the userscript by clicking [this link](https://github.com/MarcGamesons/twitch-userscript-use-chitchat/raw/master/use-chitchat.user.js).

## Usage

After installing the script make sure that it is enabled. It will then replace the chat automatically.

### Chit Chat is still not loading
Make sure that your browser or third party extensions don't block cookies nor local storage data.

## License

[MIT](https://choosealicense.com/licenses/mit/)
