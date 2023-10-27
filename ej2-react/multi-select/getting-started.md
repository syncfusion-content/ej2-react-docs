---
layout: post
title: Getting started with React MultiSelect Component | Syncfusion
description:  Checkout and learn about getting started with React MultiSelect component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React MultiSelect Component

This section explains how to create a simple **MultiSelect** component and configure its available functionalities in React.

To get start quickly with React MultiSelect component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=mJyXh99THzQ" %}

## Dependencies

The following list of dependencies are required to use the `MultiSelect` component in your application.

```javascript
|-- @syncfusion/ej2-react-dropdowns
|-- @syncfusion/ej2-react-base
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

    ```bash
      npm install -g create-react-app
    ```

Start a new project using create-react-app command as follows

    ```
    create-react-app quickstart --scripts-version=react-scripts-ts
    cd quickstart
  ```

## Adding syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install MultiSelect component, use the following command

```bash

npm install @syncfusion/ej2-react-dropdowns --save

```

## Adding MultiSelect component

Now, you can start adding MultiSelect component in the application. For getting started, add the MultiSelect component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the MultiSelect.

`[Class-component]`

```ts

import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the MultiSelect component
      <MultiSelectComponent  id='mtselement'/>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```ts
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App(){
    return (
       // specifies the tag for render the MultiSelect component
      <MultiSelectComponent  id='mtselement'/>
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Adding CSS reference

Import the MultiSelect component required CSS references as follows in `src/App.css`.

```css

/* import the MultiSelect dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

```

## Binding data source

After initialization, populate the data using [dataSource](https://ej2.syncfusion.com/react/documentation/api/multi-select/#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

`[Class-component]`

```ts

import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the MultiSelect component
      <MultiSelectComponent id="mtselement" dataSource={this.sportsData} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```ts
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(){
  // define the array of data
  let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    return (
        // specifies the tag for render the MultiSelect component
      <MultiSelectComponent id="mtselement" dataSource={sportsData} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

After completing the configuration required to render a basic  MultiSelect, run the following command to display the output in your default browser.

```
npm start
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs22" %}

## Configure the Popup List

By default, the width of the popup list automatically adjusts according to the MultiSelect input element's width and the height of the popup list has '300px'.

You can also customize the suggestion list height and width using [popupHeight](https://ej2.syncfusion.com/react/documentation/api/multi-select/#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/multi-select/#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs24" %}

## See Also

* [How to bind the data](./data-binding)
