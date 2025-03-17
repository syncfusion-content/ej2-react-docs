---
layout: post
title: Create a routing sample in React Grid component | Syncfusion
description: Learn here all about Creating a Routing sample in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Create a Routing sample
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a routing sample in React Grid component

[React Router](https://reactrouter.com/en/main) is a popular routing library which is widely used for building single-page applications (SPA's) with React.  It provides a way to handle navigation and routing in your application, allowing you to define different routes and render different components based on the current URL.

## Steps to create a routing sample in React Grid component

**1. Creating a React project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:**

A simple React project can be created by following the steps under [getting started](https://ej2.syncfusion.com/react/documentation/grid/getting-started) section of this documentation. Run the following command in the terminal to install React Router.

```
npm install react-router-dom
```

To use React routing in your application, you need to create at least two components that can be navigated from one to another.

**2. Setting up Router:**

Import the <BrowserRouter> component from the react-router-dom library and wrap it around your list of <Routes> components

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

**3. Defining Routes:**

 Inside your application, you can define different routes using the <Route> component. Each route represents a URL pattern and the component to render when that pattern matches.

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

**4. Navigation between Routes:**

 You can navigate between routes using the <Link> component. It renders an anchor tag that triggers a route change when clicked, without causing a full page to reload.

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
[Here](https://github.com/SyncfusionExamples/DataGrid-routing-react), you can find the React Routing sample with Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid.