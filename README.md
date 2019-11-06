# Vue Thesaurus Code Challenge

This single-page app is a short-term code challenge to learn Vue to create a thesaurus application. 

Clicking on (or tabbing to and hitting enter on) a synonym in the list will initiate a new search for the user. 

Tech used: **Vue.js**, **Jest**, **CSS**

Vue.js was a new framework for me, but it was a fun challenge to implement it in about two days. I particularly enjoyed the HTML templates (no JSX like in React.js), and the styling living in the same file as the HTML and methods/data. Testing with Jest was pretty painless compared to testing React, since documentation is clear and plentiful and mocking out methods behaves as expected. I also loved the watcher methods, which is more straightforward than the React componentDidUpdate (that requires checking previous and current props to prevent crashing your application). 

A challenge I faced was understanding how to pass data and methods between components. While similar to prop drilling in React, there is a clear difference in how to pass data from parent to child components (props) and from child to parent (event emitters) in Vue.js. 

I'd like to learn more about the event emission process of Vue.js, the proper architecture of larger applications, and using lifecycle methods. 

### Production Link

[Click here to view the deployed application.]()

### Setup

If you don't already have node on your machine, please [follow these directions](https://treehouse.github.io/installation-guides/mac/node-mac.html) to download Homebrew and Node.js and NPM.

```
git clone https://github.com/bld010/thesaurus
npm install
npm run serve
```

To view the testing suite: 

```npm test```

### Gif of Application


