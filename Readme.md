# react-floating-label-input

Floating-label input component for React.


### Demo

![](https://rawgit.com/vdemedes/react-floating-label-input/master/media/demo.gif)

Check out `demo.html` for a live demo.


### Installation

```
$ npm install react-floating-label-input --save
```

To include stylesheets, import `index.css` file from the package directory.


### Usage

```js
var Input = require('react-floating-label-input');

React.render(<Input label="Email address" />, document.body);
React.render(<Input label="Password" type="password" />, document.body);
React.render(<Input label="Custom field" className="my-custom-class" />, document.body);
```


### License

MIT @ Vadym Demedes (c)
