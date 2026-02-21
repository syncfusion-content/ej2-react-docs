---
layout: post
title: Getting started with React Drop down list component | Syncfusion
description:  Checkout and learn about Getting started with React Drop down list component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React DropDownList component

This section explains the steps required to create a simple React DropDownList component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React DropDownList, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=dNpHnYP1vVA" %}

## Setup for local development

Set up a React application using `create-vite-app`, which offers a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide).

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command prompts you to configure settings for the new project, including the framework and variant selection.

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> DropDownList packages

All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install the DropDownList component, use the following command:

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

> The --save will instruct NPM to include the DropDownList package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding DropDownList component

The React DropDownList component can be added to the application by following these steps. To get started, add the DropDownList component to the **src/App.tsx** file using the following code.

The following dropdownlist code should be placed in the **src/App.tsx** file.

`[Class-component]`

```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the DropDownList component
      <DropDownListComponent id='ddlelement'/>
    );
  }
}
```

`[Functional-component]`

```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App() {
    return (
       // specifies the tag for render the DropDownList component
      <DropDownListComponent id='ddlelement'/>
    );
}
```

## Binding data source

After initialization, populate the DropDownList with data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default#datasource) &nbsp;property. In the following example, an array of string values is bound to the DropDownList component.

`[Class-component]`

```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the DropDownList component
      <DropDownListComponent id="ddlelement" dataSource={this.sportsData} />
    );
  }
}
```

`[Functional-component]`

```ts
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App() {
  // define the array of data
  const sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
        // specifies the tag for render the DropDownList component
      <DropDownListComponent id="ddlelement" dataSource={sportsData} />
    );
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
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/dropdownlist/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/dropdownlist/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/dropdownlist/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/dropdownlist/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs26" %}

## Configure the Popup List

By default, the popup list width adjusts automatically to match the DropDownList input element's width, and the height is set to 300px.

Customize the popup list height and width using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/index-default#popupwidth) properties respectively.

In the following sample, popup list's width and height are configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/dropdownlist/basic-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/dropdownlist/basic-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs27" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/dropdownlist/basic-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/dropdownlist/basic-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs28" %}

> Refer to the [React DropDownList](https://www.syncfusion.com/react-components/react-dropdown-list) feature tour page for its groundbreaking feature representations. You can also explore our [React DropDownList component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/drop-down-list/default) that shows how to render the DropDownList in React.

## See Also

* [How to bind the data](./data-binding)