---
layout: post
title: Getting started with React Menu component | Syncfusion
description:  Checkout and learn about Getting started with React Menu component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Menu, and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the Menu component in your application.

```javascript
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setup your development environment

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

<div class='tsx'>

```bash

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

</div>

<div class='jsx'>

```bash

create-react-app quickstart

cd quickstart

```

</div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Menu` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

The above command installs [Menu dependencies](./getting-started#dependencies) which are required to render the component in the `React` environment.

## Adding Style sheet to the Application

Add Menu component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

```

## Add Menu to the project

Now, you can add `Menu` component in the application. For getting started, add `Menu` component in `src/App.tsx` file. Using the following code snippet.



```ts

import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';

function App() {
    // Menu items definition
    let menuItems: MenuItemModel[] = [
        {
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ],
             text: 'Edit'
        },
        {
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ],
            text: 'View'
        },
        {
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ],
            text: 'Tools'
        },
        { text: 'Go' },
        { text: 'Help' }
    ];

    return (
        <MenuComponent items={menuItems}/>
    );
}
export default App;
```

```ts
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    // Menu items definition
    let menuItems = [
        {
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ],
            text: 'Edit'
        },
        {
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ],
            text: 'View'
        },
        {
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ],
            text: 'Tools'
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
    return (<MenuComponent items={menuItems}/>);
}
export default App;
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Menu component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/getting-started-cs5" %}

> This example demonstrates the basic rendering of Menu with items support. For more information about data source support, refer to the [`Data Source Binding`](./data-source-binding-and-custom-menu-items#data-binding) section.

## See Also

* [Create menu using data source](./data-source-binding-and-custom-menu-items#data-binding)
* [Customize menu items using template support](./data-source-binding-and-custom-menu-items#custom-menu-items)
* [Integrating with Toolbar component](./use-case-scenarios#toolbar)