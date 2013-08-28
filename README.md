nodejswebserver
===============
You can see our fancy site over at http://mfoulks3200.github.io/nodejswebserver/

Getting your server up and running
=================================
Firstly, if you havent already, download nodejs from nodejs.org. Once that is done, you can unpack the nodejswebserver package and run the index.js file, or, if your on a windows system, run the batch file.

Configuring your server
=======================
There are instructions in the config.js file on configuring your server

Modding Your Requests
====================
In the mod.js file, you can make individual functions for each file extension, the request handler will then pass all code going to that page through your function for filtering, or custom code on a per page basis.