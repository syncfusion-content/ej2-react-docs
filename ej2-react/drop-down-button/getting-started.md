---
layout: post
title: Getting started with React Drop down button component | Syncfusion
description:  Checkout and learn about Getting started with React Drop down button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create a simple **DropDownButton** component and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the `DropDownButton` component in your application.

```js
|-- @syncfusion/ej2-react-splitbuttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```bash
     npm install -g create-react-app
   ```

Start a new project using create-react-app command as follows.

```bash
  create-react-app quickstart --scripts-version=react-scripts-ts
  cd quickstart
   ```
Or
   ```bash
     create-react-app quickstart
     cd quickstart
   ```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install DropDownButton component, use the following command

```bash

npm install @syncfusion/ej2-react-splitbuttons –save

```

## Adding DropDownButton component

Now, you can start adding DropDownButton component in the application. For getting started, add the DropDownButton component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the DropDownButton.



```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

enableRipple(true);

// To render DropDownButton.
function App() {
  return (
    <div>
      <DropDownButtonComponent id="element" />
    </div>
  );
}
export default App;
```

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';
enableRipple(true);
// To render DropDownButton.
function App() {
    return (<div>
      <DropDownButtonComponent id="element"/>
    </div>);
}
export default App;
```

## Adding CSS reference

Import the DropDownButton component required CSS references as follows in `src/App.css`.

```css

/* import the DropDownButton dependency styles */
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

```

## Binding data source

After initialization, populate the DropDownButton with data using the [`items`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button#items) property. Here, an array of string values is passed to the DropDownButton component.



```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

enableRipple(true);

// To render DropDownButton.
function App() {
  let items: ItemModel[] = [
    {
      text: 'Cut',
    },
    {
      text: 'Copy',
    },
    {
      text: 'Paste',
    }];
    return (
      <div>
        <DropDownButtonComponent id="element" items={items}> Clipboard </DropDownButtonComponent>
      </div>
    );
}
export default App;
```

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Cut',
        },
        {
            text: 'Copy',
        },
        {
            text: 'Paste',
        }
    ];
    return (<div>
        <DropDownButtonComponent id="element" items={items}> Clipboard </DropDownButtonComponent>
      </div>);
}
export default App;
```

## Run the application

After completing the configuration required to render a basic DropDownButton, run the following command to display the output in your default browser.

   ```
   npm start
   ```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/getting-started-cs1" %}

## See Also

* [DropDownButton with icons](./icons#dropdownbutton-icons)
* [How to hide dropdown arrow](./how-to/hide-dropdown-arrow)
* [Dropdown popup with separator](./popup-items#separator)
