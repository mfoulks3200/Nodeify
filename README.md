nodejswebserver
===============
You can see our fancy site over at http://mfoulks3200.github.io/nodejswebserver/

Getting your server up and running
=================================
Firstly, if you havent already, download nodejs from nodejs.org. Once that is done, you can unpack the nodejswebserver package and run the index.js file, or, if your on a windows system, run the batch file.

Configuring your server
=======================
In the index.js file, this line of code is on the 4th line:
server.start(router.route,1, 8888);
This line of code kicks off the server
The first paramiter sends the request url to router.js to be pharsed
The 2nd paramiter is a debug tool, when set to 1 it will print out every request made as it happends along with error codes (set this to 0 to turn off (on by default))
The last paramiter is the port for the server to run off of
