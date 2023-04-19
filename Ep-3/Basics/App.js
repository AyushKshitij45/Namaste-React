import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// just like DOM elements ex: h1, h2, p etc we have React elements which are kinda equivalent to DOM elements

//React.createElements creates an object which when rendered onto DOM becomes a html element

//React element using React

//React.createElement => JS Object => HTMLElement(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "This is the h1 element"
);

//JSX- HTML like - XML like
//React element using JSX

//JSX(transpiled before it reaches JS) - PARCEL - Babel(JSX => React.createElement)
//JSX => React.createElement => React.createElement => JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 id="heading" tabIndex="5">
        JSX heading
    </h1>
);

console.log(heading);
console.log(jsxHeading);

//React Functional Component
const HeadingComponent = () => {
    return (
    <h1>This is a React Functional Component</h1>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
