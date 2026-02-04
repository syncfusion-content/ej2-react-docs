---
layout: post
title: Getting started with React TextBox component | Syncfusion
description:  Checkout and learn about Getting started with React TextBox component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React TextBox component

This section explains how to create a simple TextBox using Vite.

## Dependencies

The following list of dependencies are required to use the TextBox component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-base
		|-- @syncfusion/ej2-buttons
		|-- @syncfusion/ej2-popups
		|-- @syncfusion/ej2-splitbuttons
```

## Installation and Configuration

To easily set up a React application, use Vite, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

* To install TextBox component, use the following command.

```bash
npm install @syncfusion/ej2-react-inputs --save
 ```

* The above package installs [Input dependencies](./getting-started#dependencies) which are required to render the TextBox component in React environment.

* The TextBox CSS files are available in the `ej2-react-inputs` package folder. This can be referenced in your application using the following code.

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding TextBox to the application

Return the TextBoxComponent within the `render` method in the `src/App.tsx` file to render the TextBox component, as shown below.

`[Class-component]`

```ts
import * as React from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      // element which is going to render the TextBox
      <TextBoxComponent placeholder="Enter Name"></TextBoxComponent>
    );
  }
};
```

`[Functional-component]`

```ts
import * as React from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default function App() {
  return (
    // element which is going to render the TextBox
    <TextBoxComponent placeholder="Enter Name"></TextBoxComponent>
  );
};
```

## Adding icons to the TextBox

You can create a TextBox with an icon by using the [addIcon](https://ej2.syncfusion.com/react/documentation/api/textbox/index-default#addicon) method within the [created](https://ej2.syncfusion.com/react/documentation/api/textbox/index-default#created) event. For detailed information, refer to the [Groups](./groups) section.

`[Class-component]`

```ts
import * as React from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

export default class App extends React.Component {
  public textboxObj = React.createRef<TextBoxComponent>();

  public oncreate = () => {
    (this.textboxObj.current as TextBoxComponent).addIcon('append', 'e-icons e-input-group-icon e-input-popup-date');
  };

  public render() {
    return (
      <TextBoxComponent
        id='textbox'
        placeholder="Enter Date"
        ref={this.textboxObj}
        created={this.oncreate}
      />
    );
  }
}
```

`[Functional-component]`

```ts
import * as React from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';
import './App.css';

export default function App() {
  const textboxObj = useRef<TextBoxComponent>(null);

  function oncreate() {
    if (textboxObj.current) {
      textboxObj.current.addIcon('append', 'e-icons e-input-group-icon e-input-popup-date');
    }
  }

  return (
    <TextBoxComponent
      id='textbox'
      placeholder="Enter Date"
      ref={textboxObj}
      created={oncreate}
    />
  );
};
```

```
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date {
    font-size:16px;
}
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date:before {
    content: "\e901";
}
```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/default-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs2" %}

## Floating Label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox.
You can create the floating label TextBox by using the `floatLabelType` API.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/textbox-component-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/textbox-component-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/textbox-component-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/textbox-component-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-cs2" %}

> You can refer to our [React TextBox](https://www.syncfusion.com/react-ui-components/react-textbox) feature tour page for its groundbreaking feature representations. You can also explore our [React TextBox example](https://ej2.syncfusion.com/react/demos/#/material/textboxes/default) to know how to render and configure the TextBox.

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
