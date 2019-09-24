# NoJOB!

Chat roulette in p2p made to work in a restricted network. Uses raw WebRTC APIs to achieve maximum bandwidth. 

## Purpose

I recently noticed that my 4 years in college is about to end, and I wasn't the only person who loves sitting in room on campus! Why not make something for it :) Here it is

## Usage-Server
Plugin self signed SSL certificates to **invalid_certs** folder in root directory, *port forward* incoming connections to port 443 run
 `node server.js`
 You are good to go!
 
## Usage-Client
A Secret IP and port is propagated in random groups forwaded by anonymous endpoints. On plugging the ip and port to any browser, to your surprise you are not provided by the webpage but a SSL warning instead {obviously self signed certificates are not allowed}. But since you know that IP in range of RFC 1918 are not allowed, and the ip you have on the local network is infact in range of RFC 1918. So, just skip the warning, since it is unavoidable and enjoy the service. :)

## Future Plans
A WebRTC based file transfer page for intranet maybe? Who's up ??:P