# Use Chit Chat

This is a userscript that replaces the chat on [Twitch](https://twitch.tv) with an embed of [Chit Chat](https://chitchat.ma.pe/) by [mape](https://twitter.com/mape).

## Bookmarklet

Instead of downloading a UserScript you can create a bookmarklet. To do so you need to create a new bookmark and use the code below as url. To load ChitChat click it after the Twitch chat has loaded. To undo reload the page that has loaded the Twitch chat.

``` js
javascript:(function()%7Bvar%20jsCode%20%3D%20document.createElement('script')%3B%0AjsCode.setAttribute('src'%2C%20'https%3A%2F%2Fgithub.com%2FMarcGamesons%2Ftwitch-userscript-use-chitchat%2Fblob%2Fmaster%2Fbookmarklet.js')%3B%0Adocument.body.appendChild(jsCode)%3B%7D)()%3B
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
