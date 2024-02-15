import React from 'react'
import ReactDOM from 'react-dom/client'

//React.crerateElement => Objevtct => HTMLElement(render)

const elem = <span>Hey</span>

const Title = () => {
    return <h1>Hi  iam  title heading</h1>
}

const title = (
    <h1>
        {elem}
        element
    </h1>
)

const heading = React.createElement("h1", { id: "heading" }, "HI iam Heading")


// JSX => Babel is transpiled it to  React.createElement => React Element => JS Object => HTML Element(render)

//Jsx (transpiled before it reaches the JS ) -PARCEL  -Babel

const jsxHeading = (<h1 className='head'>This is from Jsx</h1>)

//React Functional Component


//Component  Composition - Where component in another component
//And also the title in the component is a React element using JSX {title}
const HeaderComponent = () => {

    return <>
        <Title />
        {title}
        <h1 className='heading'> Namaste React Functional component</h1>
    </>
}

const HeaderComponent2 = () => (
    <div>
        <Title />
        <h2>hey</h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);