# react-detect-print

React higher-order component (HOC) to detect when a page is being printed.

## What

Use as a HOC to receive a `printing` prop, which will be `true` if the page is being printed and `false` otherwise.

## Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import detectPrint from "react-detect-print";

const App = props => <div>Printing? {JSON.stringify(props.printing)}</div>;

const EnhancedApp = detectPrint(App);

ReactDOM.render(<EnhancedApp />, document.getElementById("..."));
```

See [react-detect-print-example](https://github.com/tacomanator/react-detect-print-example) for a more in-depth example.

## Should I use this?

The general recommendation is to use media queries instead. For those times when that won't work, this may fit the bill. However, it has not been widely tested so use at your own risk. It was adapted using approach detailed [in this blog post](https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/).

## Installation

```
npm install --save react-detect-print
```

## Credits

Adopted from [post by TJ VanToll](https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/).
