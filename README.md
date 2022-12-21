# react-detect-print

Detect printing status in a react.js application.

## What

Detect printing state such that be used within logic inside of a react.js application.

## Example

```jsx
import useDetectPrint from "react-detect-print";

const Component = (props) => {
  const printing = useDetectPrint();
  const color = printing ? "blue" : "red";
  return (
    <div>
      Printing? <span style={{ color }}>{JSON.stringify(props.printing)}</span>
    </div>
  );
};
```

## Should I use this?

In most cases you can use media queries to adjust page content for printing. For cases in which this is not possible or extremely inconvenient, this library may fit the bill.

## Approach

The library previously used the approach detailed [in this blog post](https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/), but that method was deprecatd. It has been redone using `window.addEventListener("beforeprint/afterprint")` as well as changing the way it is used from a HOC to a hook.

## Installation

```
npm install react-detect-print
```
