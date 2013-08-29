nodejswebserver
===============
You can see our fancy site over at http://mfoulks3200.github.io/nodejswebserver/

Getting your server up and running
=================================
Firstly, if you havent already, download nodejs from nodejs.org. Once that is done, you can unpack the nodejswebserver package and run the index.js file, or, if your on a windows system, run the batch file.

Configuring your server
=======================
You can either run the config command in your terminal followed my the option you want to configure, and its new value, or edit them directly through the config.js configuration file.

Port: This is the port the server runs off of

Uptime: The uptime variable controls how often the servers current uptime automaticly gets logged and printed to the terminal, you can set it to 0 to disable this feature, which is disabled by default, you can also use the uptime command in the terminal to display the current uptime.

Terminal Commands
================
Stop: Kill the server

Help: Display the avalible commands

Getip: Get your local ip, plus the port the server is running on

Config: Edit config options through the terminal

License: Show Licensing Info

Credits: Show credits

Uptime: Print and log the current uptime

Modding Your Requests
====================
In the mod.js file, you can modify the default request as it goes out on a per page basis.