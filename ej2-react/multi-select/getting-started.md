---
layout: post
title: Getting started with React Multi select component | Syncfusion
description:  Checkout and learn about Getting started with React Multi select component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React MultiSelect component

This section explains the steps required to create a simple React MultiSelect component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React MultiSelect, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=mJyXh99THzQ" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> MultiSelect packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the MultiSelect component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

> The --save will instruct NPM to include the MultiSelect package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding MultiSelect component

The React MultiSelect component can be added to the application by following these steps. To get started, add the MultiSelect component to the **src/App.tsx** file using the following code.

The following multiselect code should be placed in the **src/App.tsx** file.
`[Class-component]`

```ts
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the MultiSelect component
      <MultiSelectComponent  id='mtselement'/>
    );
  }
}
```

`[Functional-component]`

```ts
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App(){
    return (
       // specifies the tag for render the MultiSelect component
      <MultiSelectComponent  id='mtselement'/>
    );
}
```

## Binding data source

After initialization, populate the data using [dataSource](https://ej2.syncfusion.com/react/documentation/api/multi-select/index-default#datasource) &nbsp;property. Here, an array of string values is passed to the MultiSelect component.

`[Class-component]`

```ts
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

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
```

`[Functional-component]`

```ts
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App(){
  // define the array of data
  let sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    return (
        // specifies the tag for render the MultiSelect component
      <MultiSelectComponent id="mtselement" dataSource={sportsData} />
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

You can also customize the suggestion list height and width using [popupHeight](https://ej2.syncfusion.com/react/documentation/api/multi-select/index-default#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/multi-select/index-default#popupwidth) properties respectively.

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

> Refer to the [React MultiSelect](https://www.syncfusion.com/react-components/react-multiselect-dropdown) feature tour page for its groundbreaking feature representations. You can also explore our [React MultiSelect component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/multi-select/default) that shows how to render the MultiSelect in React.

## See Also

* [How to bind the data](./data-binding)
