---
layout: post
title: Getting started with React Split button component | Syncfusion
description:  Checkout and learn about Getting started with React Split button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section briefly explains how to create a simple **SplitButton** component and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the `SplitButton` component in your application.

```js
|-- @syncfusion/ej2-react-splitbuttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. 

To install `create-react-app` run the following command.

    ```bash
      npm install -g create-react-app
    ```

Start a new project using create-react-app command as follows

     <div class='tsx'>

     ```
       create-react-app quickstart --scripts-version=react-scripts-ts
       cd quickstart
     ```
    </div>
    <div class='jsx'>
   ```
   create-react-app quickstart
   cd quickstart
  ``` 
  </div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install SplitButton component, use the following command

```bash

npm install @syncfusion/ej2-react-splitbuttons –save

```

## Adding SplitButton component

Now, you can start adding SplitButton component in the application. For getting started, add the SplitButton component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the SplitButton.



```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

enableRipple(true);

// To render SplitButton.
function App() {

  return (
    <div>
      <SplitButtonComponent id="element"/>
    </div>
  );
}
export default App;

```

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';
enableRipple(true);
// To render SplitButton.
function App() {
    return (<div>
      <SplitButtonComponent id="element"/>
    </div>);
}
export default App;
```

## Adding CSS reference

Import the SplitButton component required CSS references as follows in `src/App.css`.

```css

/* import the SplitButton dependency styles */
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

```

## Binding data source

After initialization, populate the SplitButton with data using the [`items`](https://ej2.syncfusion.com/react/documentation/api/split-button#items) property. Here, an array of string values is passed to the SplitButton component.



```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { ItemModel, SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

enableRipple(true);

// To render SplitButton.
function App() {

  public items: ItemModel[] = [
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
      <SplitButtonComponent id="element" items={items}> Paste </SplitButtonComponent>
    </div>
  );
}
export default App;

```

```ts
import { enableRipple } from '@syncfusion/ej2-base';
import { ItemModel, SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';
enableRipple(true);
// To render SplitButton.
function App() {
    items: ItemModel[] = [
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
      <SplitButtonComponent id="element" items={items}> Paste </SplitButtonComponent>
    </div>);
}
export default App;
```

## Run the application

After completing the configuration required to render a basic SplitButton, run the following command to display the output in your default browser.

```
npm start
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/getting-started-cs1" %}

## See Also

* [SplitButton with icons](./icons-and-separator#splitbutton-icons)