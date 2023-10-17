---
layout: post
title: Getting started with React Tooltip component | Syncfusion
description:  Checkout and learn about Getting started with React Tooltip component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Tooltip component

This section briefly explains how to create a simple **Tooltip** component and configure its available functionalities in React.

Tooltips can be initialized on,

* A single element (or)
* A container that has more than one sub-element within it and the sub-elements are considered as targets.

## Dependencies

The following list of dependencies are required to use the Tooltip component in your application.

```javascript
|-- @syncfusion/ej2-react-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Installation and configuration

* You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

    ```bash
      npm install -g create-react-app
    ```

Start a new project using `create-react-app` command as follows
<div class='tsx'>

    ```bash
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

* Install the below required dependency package in order to use the `Tooltip` component in your application.

   ```bash
    npm install @syncfusion/ej2-react-popups --save
   ```

The above package installs [tooltip dependencies](#dependencies) which are required to render the Tooltip component in React environment.

* Tooltip CSS files are available in the `ej2-react-popups` package folder.
Import the Tooltip component's required CSS references as follows in `src/App.css`.

   ```css
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-react-popups/styles/material.css";
   ```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Initialize the Tooltip on a single element

Import the Tooltip component to your `src/App.tsx` file using following code.



```javascript
import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  let style: object = {
    display: 'inline-block',
    margin: '60px'
  };
  return (
    <TooltipComponent content="Tooltip Content" style={style}>
      Show Tooltip
    </TooltipComponent>
  );
}

```

```ts
import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
function App() {
    let style = {
        display: 'inline-block',
        margin: '60px'
    };
    return (<TooltipComponent content="Tooltip Content" style={style}>
      Show Tooltip
    </TooltipComponent>);
}
```

* Now, run the application in the browser using the following command.

   ```bash
    npm start
   ```

The output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/default-cs1" %}

## Initialize Tooltip within a container

You can create Tooltips on multiple targets within a container. To do so, you have to define specific target elements to the `target` property so that the Tooltip is initialized only on matched targets within a container. In this case, the Tooltip content is assigned from the `title` attribute of the target element.

Refer to the following code example to create a Tooltip on multiple targets within a container.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/multi-target-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/multi-target-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/multi-target-cs2" %}

> In the above sample, `details` refers to the container's id, and the target `.e-info` refers to the target elements available
> within that container.

## See Also

[Positioning Tooltip](./position)

[Tooltip Open Mode](./open-mode)

[Customize the Tooltip](./customization)