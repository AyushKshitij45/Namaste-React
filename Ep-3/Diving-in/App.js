import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 className="heading" tabIndex="5">
        JSX heading
    </h1>
);


//React Functional Component
const HeadingComponent = () => {
    return (
    <div id="container">
        {heading}
        <h1>This is a React Functional Component</h1>
    </div>
    
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
