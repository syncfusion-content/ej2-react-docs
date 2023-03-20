---
layout: post
title: Getting started with React Progress button component | Syncfusion
description:  Checkout and learn about Getting started with React Progress button component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple ProgressButton and to configure it.

## Dependencies

The list of dependencies required to use the ProgressButton component in your application is given as follows:

```js
|-- @syncfusion/ej2-react-splitbuttons
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the
applications.
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

All the available Essential JS 2 packages are published in
[`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install.

To install ProgressButton component, use the following command

```bash
npm install @syncfusion/ej2-react-splitbuttons –save

```

## Adding ProgressButton component

Now, you can start adding ProgressButton component in the application. For getting started, add the
ProgressButton component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the ProgressButton.



```ts
import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';

// To render ProgressButton.
function App() {

  return (
    <div>
      <ProgressButtonComponent content='Spin Left' />
    </div>
  );
}
export default App;
```

```ts
import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './App.css';
// To render ProgressButton.
function App() {
    return (<div>
      <ProgressButtonComponent content='Spin Left'/>
    </div>);
}
export default App;
```

## Adding CSS reference

Import the ProgressButton component required CSS references as follows in `src/App.css`.

```css
/* import the ProgressButton dependency styles */
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

```

## Run the application

After completing the configuration required to render a basic ProgressButton, run the following command to
display the output in your default browser.

```
npm start
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs2" %}

> ProgressButton supports different styles, types and sizes like [`Button`](https://ej2.syncfusion.com/react/documentation/button/). In addition, it also supports `top` and `bottom` icon positions.

## See Also

* [Spinner and Progress options](spinner-and-progress#spinner)