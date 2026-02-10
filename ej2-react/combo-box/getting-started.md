---
layout: post
title: Getting started with React Combo box component | Syncfusion
description:  Checkout and learn about Getting started with React Combo box component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React ComboBox component

This section explains the steps required to create a simple React ComboBox component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React ComboBox, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=o77F7gewC40" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> ComboBox packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the ComboBox component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

> The --save will instruct NPM to include the ComboBox package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding ComboBox component

The React ComboBox component can be added to the application by following these steps. To get started, add the ComboBox component to the **src/App.tsx** file using the following code.

The following combobox code should be placed in the **src/App.tsx** file.
`[Class-component]`

```ts
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the ComboBox component
      <ComboBoxComponent id='comboelement'/>
    );
  }
}
```

`[Functional-component]`

```ts
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App() {
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id='comboelement'/>
    );
}
```

## Binding data source

After initialization, populate the ComboBox with data using the `dataSource` property. Here, an array of string values is passed to the ComboBox component.

`[Class-component]`

```ts
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the ComboBox component
      <ComboBoxComponent id="comboelement" dataSource={this.sportsData} />
    );
  }
}
```

`[Functional-component]`

```ts
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import './App.css';

export default function App() {
  // define the array of data
  const sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" dataSource={sportsData} />
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
{% include code-snippet/combobox/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs22" %}

## Custom values

The ComboBox allows the user to give input as custom value which is not required to present in predefined set of values. By default, this support is enabled by [allowCustom](https://ej2.syncfusion.com/react/documentation/api/combo-box/index-default#allowcustom) property. In this case, both text field and value field considered as same. The custom value will be sent to post back handler when a form is about to be submitted.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs24" %}

## Configure the popup list

By default, the width of the popup list automatically adjusts according to the ComboBox input element's width, and the height of the popup list has '300px'.

The height and width of the popup list can also be customized using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/combo-box/index-default#popupheight) &nbsp;and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/combo-box/index-default#popupwidth) property respectively.

In the following sample, popup list's width and height have been configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/combobox/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/combobox/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs26" %}

> Refer to the [React ComboBox](https://www.syncfusion.com/react-components/react-combobox) feature tour page for its groundbreaking feature representations. You can also explore our [React ComboBox component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/combo-box/default) that shows how to render the ComboBox in React.

## See Also

* [How to bind the data](./data-binding)