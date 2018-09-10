# About The Project
`cooki-e-commerce` is a web app built using a bunch of javascript frameworks or web technologies such as `react`, `node` and `expressJS` to sell a variety of cookies for an imaginary business with the name of "Cookie Stop".

# Set it Up
In case you want to play around with the project on your own machine, you would have to:
* Install the latest version of [`node.js`](https://nodejs.org/en/) 
* Open up a terminal window and navigate to the directory where the project is stored

Once all that is taken care of, follow the steps below to set up the project and have it running.
1. In your terminal, run `npm install` to install all of the project's dependencies. This is needed so it would have all the files it'll need to work, run properly and look fancy.
2. If desired, edit the following files:
   * __server.js__: In the call to the function `listen`, change the port number (currently 3000) to a desired port number.
   * __webpack.config.js__: If you want to change the entry point where webpack will begin checking for dependencies, change the path to the script found at _entry_.
   * __styles.scss__: If you want to include other css stylesheets, import them in `styles.scss` found in the _src_ directory.
t3. Once all desired edits are compeleted, on your terminal, run `npm run-script build` to build the webpack bundle used by the project to compress its assets into one file.
4. Start up the server by running `npm start` or `node server` using your terminal.
5. View the application by navigating to `http://localhost:[port number]/index`. Where `port number` is the value you passed to _listen_ in __server.js__. Alternatively, it is __3000__ by default.

# Notes
* At the making of this project, the current version of Node.js is _8.11.3_
* Big thanks to the owners of all the images I have used in this project.
* Big thanks to the creator of the [`KR Bite Me font`](https://www.dafont.com/kr-bite-me.font?text=Cookie+stop).
