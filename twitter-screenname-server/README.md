# Twitter Compose

##Set up server

We've tested this using Node v6.2.2, but any minor version of Node v6 should work.

Use `npm install` to install all dependencies.

Use `npm run start` to start the Twitter lookup server

Navigate to [http://localhost:3001/](http://localhost:3001/) to ensure the local server is responding to requests. If the URL loads, attempt to make a sample user search request http://localhost:3001/twitter/user/search?username=chicago