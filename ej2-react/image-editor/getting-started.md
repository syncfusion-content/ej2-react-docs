---
layout: post
title: Getting started with React Image editor component | Syncfusion
description:  Checkout and learn about Getting started with React Image editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create and configure a simple [React Image Editor component](https://www.syncfusion.com/react-ui-components/react-image-editor).

To get start quickly with Image Editor Component using React, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=1Fjuk5Dn3BU" %}

## Dependencies

The list of dependencies required to use the Image Editor component in your application is given below:

```javascript
|-- @syncfusion/ej2-react-image-editor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

   ```bash
    npm install -g create-react-app
   ```

Start a new project using create-react-app command as follows,

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

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install Image Editor component, use the following command.

  ```bash
   npm install @syncfusion/ej2-react-image-editor --save
   ```

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Image Editor component to the Application

To include the Image Editor component in your application import the `ImageEditorComponent` from `ej2-react-image-editor` package in `App.tsx`.

Add the Image Editor component in application as shown in below code example.



```ts
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

function App() {

  return (
      <div id="wrapperDiv">
          <ImageEditorComponent/>
      </div>
  );
}
export default App;

```

## Adding CSS Reference

Import the Image Editor component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Image Editor component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs6" %}

> You can also explore our [React Image Editor example](https://ej2.syncfusion.com/react/demos/#/material/image-editor/getting-started) that shows how to render the Image Editor in React.