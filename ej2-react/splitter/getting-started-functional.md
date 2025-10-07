---
layout: post
title: Getting started functional with React Splitter component | Syncfusion
description:  Checkout and learn about Getting started functional with React Splitter component of Syncfusion Essential JS 2 and more details.
control: Splitter
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Splitter

The following section explains the steps required to build the Splitter component with a step-by-step procedure.

## Dependencies

The following dependencies are required to use the Splitter component in your application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-react-base

```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

        ```
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

Install the below required dependency package in order to use the `Splitter` component in your application.

         ```bash
           npm install @syncfusion/ej2-react-layouts --save
         ```

* The Splitter CSS files are available in the `ej2-layouts` package folder.
This can be referred in your application using the following code.

`[src/App.css]`

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding Splitter to the project

Initialize the Splitter through `<SplitterComponent>` tag-directive with `<PanesDirective>` and `<PaneDirective>` as child elements respectively.

Please refer the below code snippet,



```ts
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App() {
  return (
    <div className="App">
    <SplitterComponent id="splitter" height="250px" width="600px">
        <PanesDirective>
          <PaneDirective/>
          <PaneDirective/>
          <PaneDirective/>
        </PanesDirective>
    </SplitterComponent>
    </div>
  );
}

export default App;

```



After completing the configurations to render the Splitter, use the following command to display the output in your default browser.

         ```
          npm start
         ```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs1" %}

## Orientation

Splitter supports both `Horizontal` and `Vertical` pane layouts. By default, it renders in `Horizontal` orientation. Change it using the [orientation](https://ej2.syncfusion.com/react/documentation/api/splitter/#orientation) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs2" %}

## Load Content into Panes

Load pane content as an HTML element or string using the [content](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel/#content) property.

For detailed information, refer to the [Pane Content](./pane-content) section.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs3" %}

## See Also

* [Construct different layouts using Splitter](different-layouts)
