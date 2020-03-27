# strawpollbot
Sorry strawpoll ;)

# How to use

run npm install socks-proxy-agent, npm install request-promise, npm install unirest


IP VERIFICATION:
<br>
Enter socks4 proxies into proxies.txt, if you need to use socks5 edit the code and replace socks4:// with socks5://!
<br>
Use the chrome developer tools, open the network tab. Make sure to tick the preserve log button.
<br>
<img src="https://i.imgur.com/AgXuk8p.png" alt ="image">
<br>
Once you've done that, you can vote for your selected option!
<br> 
After you voted try to find a request that is numbered
<br>
<img src="https://i.imgur.com/ne3x1WI.png" alt ="image">
<br>
Click it and find request url. This is what you will need to input into the code!
<br>
<img src="https://i.imgur.com/vb4gxVz.png" alt="image">
<br>
Enter it into the "uri" field
<br>
<img src="https://i.imgur.com/8PnI2Z0.png" alt="image">
<br>
Now scroll down on the page with the request url and find "options"
<br>
<img src="https://i.imgur.com/3rG7gBI.png" alt="image">
<br>
Input the options number into the form in the code
<br>
<img src="https://i.imgur.com/UmHnPRU.png" alt="image">
<br>
Now you should be able to save and run node index.js
<br>
<br>
No verification/browser cookie verification mode is very similar, you just don't need proxies.
