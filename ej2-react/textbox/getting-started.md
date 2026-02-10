---
layout: post
title: Getting started with React TextBox component | Syncfusion
description:  Checkout and learn about Getting started with React TextBox component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TextBox component

This section explains the steps required to create a simple React TextBox component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TextBox packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the TextBox component, use the following command

```bash
npm install @syncfusion/ej2-react-inputs --save
```

> The --save will instruct NPM to include the TextBox package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding TextBox component

The React TextBox component can be added to the application by following these steps. To get started, add the TextBox component to the **src/App.tsx** file using the following code.

The following textbox code should be placed in the **src/App.tsx** file.

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

Add the following CSS to your project's stylesheet:

```
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date {
    font-size:16px;
}
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date:before {
    content: "\e901";
}
```

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

> Refer to the [React TextBox](https://www.syncfusion.com/react-ui-components/react-textbox) feature tour page for its groundbreaking feature representations. You can also explore our [React TextBox component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/textboxes/default) that shows how to render the TextBox in React.

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
