---
layout: post
title: React Grid – Create Routing Example | Syncfusion
description: React Grid provides routing sample patterns, state preservation techniques, routing integration examples, and guidance for route-driven grid scenarios.
control: Create a Routing sample
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Routing sample in React Grid Component

React Router is a popular routing library for building single-page applications (SPAs) in React. It enables seamless navigation between different views or components based on the URL, without requiring full page reloads.

This guide outlines the steps to integrate routing in a React application that uses the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.

## Steps to create a routing sample in React Grid component

- Create a React Application and integrate the Grid component:

Begin by setting up a basic React project and integrating the Syncfusion Grid component. Follow the [getting started](https://ej2.syncfusion.com/react/documentation/grid/getting-started) guide for detailed instructions.

Next, install React Router by running:

```
npm install react-router-dom
```

To demonstrate routing, at least two components (such as `Home`, `About`, and `Contact`) are required so that navigation can occur between them.

- Configure the router:

Import the necessary routing components from `react-router-dom` and wrap your application's route definitions with the `<BrowserRouter>` component:

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
```

- Defining routes:

Use the `<Route>` component to map specific URL paths to corresponding React components:

Inside your application, you can define different routes using the `<Route>` component. Each route represents a URL pattern and the component to render when that pattern matches.

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='Home' element={<Home />}></Route>
                <Route path='Contact' element={<Contact />}></Route>
                <Route path='About' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    ); 
};

export default App;
```

- Navigation between Routes:

Use the `<Link>` component to create navigation links between routes. This avoids full page reloads and ensures a smooth experience:

```
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
```

A complete working example of React routing with the Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid can be explored on [GitHub](https://github.com/SyncfusionExamples/DataGrid-routing-react).
