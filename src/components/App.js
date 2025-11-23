
import React from "react";
import './../styles/App.css';


const PageLayout = ({header, children, footer}) => {

  return (
    <div>
      <h1>{header}</h1>
      <p>{children}</p>
      <p>{footer}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout 
          header='Welcome to my website'
          children='This is the content of my website.'
          footer='© 2023 My Website.All rights reserved.'
        />
    </div>
  )
}

export default App
